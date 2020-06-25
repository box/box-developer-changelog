import axios from 'axios'
import util from 'util'
import uslug from 'uslug'
import remark from 'remark'
import github from 'remark-github'
import referenceLinks from 'remark-reference-links'
import fs from 'fs-extra'
import path from 'path'
import yaml from 'js-yaml'

// Let's use dotenv to also read .env files
import dotenv from 'dotenv'
dotenv.config()

axios.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`

const run = async () => {
  // parse the tag version and repository name
  const tag = process.env.TAG
  const repository = process.env.REPOSITORY
  const template = process.env.TEMPLATE

  // get the latest releases
  const releases = await getLatestReleases(repository)
  // determine the current release
  const [release, previousRelease] = getRelevantReleases(releases, tag)
  // determine the increment between this and the previous release
  const [newFeature, impactful] = determineImpact(release, previousRelease)
  // determine the year, month, and day 
  const [year, month, day] = release.published_at.split('T')[0].split('-')
  // determine the release title, slug, filename, and body
  const title = util.format(template, release.tag_name)
  const slug = uslug(title)
  const filename = `content/${year}/${month}-${day}-${slug}.md`
  const markdown = parse(release.body)

  // build up the frontmatter
  const frontmatter = yaml.dump({
    applied_at: `${year}-${month}-${day}`,
    applies_to: process.env.TAGS,
    is_impactful: impactful,
    is_new_feature: newFeature,
    source_url: release.html_url
  })

  const content = `---\n${frontmatter}---\n\n# ${title}\n\n${markdown}`

  fs.ensureDirSync(path.dirname(filename))
  fs.writeFileSync(filename, content)
}

const getLatestReleases = async (repository) => {
  const response = await axios.get(`https://api.github.com/repos/${repository}/releases`)
  return response.data
}

const getRelevantReleases = (releases, tag) => {
  let currentRelease = null
  let previousRelease = null
  releases.forEach((release, index) => {
    if (release.tag_name === tag) {
      currentRelease = release
      previousRelease = releases[index+1]
    }
  })
  return [currentRelease, previousRelease]
}

const determineImpact = (currentRelease, previousRelease) => {
  const previousVersion = previousRelease ? previousRelease.tag_name.replace('v', '') : '0.0.0'
  const currentVersion = currentRelease.tag_name.replace('v', '')
  return [isNewFeature(previousVersion, currentVersion), isImpactful(previousVersion, currentVersion)]
}

const parse = (body) => remark().use(referenceLinks).use(github).processSync(body)

/// const write = (entry, previousEntry) => {


//   const body = entry.body
//     .replace(/https:\/\/github.com\/.*\/.*\/compare\/(v\d+\.\d+\.\d+\.\.\.v\d+\.\d+\.\d+)/g, `[$1]($&)`)
//     .replace(/#(\d+)/g, `[$&](https://github.com/${org}/${repo}/pull/$1)`)
//     .replace(/[^[](\b[0123456789abcdef]{7}\b)/g, `[$1](https://github.com/${org}/${repo}/commit/$1)`)
    
//   const oldVersion = previousEntry ? previousEntry.tag_name.replace('v', '') : '0.0.0'
//   const newVersion = entry.tag_name.replace('v', '')

//   const frontmatter = yaml.dump({
//     applied_at: `${year}-${month}-${day}`,
//     applies_to: tags,
//     is_impactful: isImpactful(oldVersion, newVersion),
//     is_new_feature: isNew(oldVersion, newVersion),
//     source_url: entry.html_url
//   })

//   const content = `---\n${frontmatter}---\n\n# ${title}\n\n${body}`

//   fs.ensureDirSync(path.dirname(filename))
//   fs.writeFileSync(filename, content)
// }

const isImpactful = (oldVersion, newVersion) => {
  const [oMajor] = oldVersion.split('.')
  const [nMajor] = newVersion.split('.')

  return nMajor > oMajor
}

const isNewFeature = (oldVersion, newVersion) => {
  const [oMajor, oMinor] = oldVersion.split('.')
  const [nMajor, nMinor] = newVersion.split('.')

  return (nMajor > oMajor) || (nMinor > oMinor)
}


run()