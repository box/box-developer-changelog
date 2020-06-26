import axios from 'axios'
import util from 'util'
import uslug from 'uslug'
import remark from 'remark'
import github from 'remark-github'
import referenceLinks from 'remark-reference-links'
import fs from 'fs-extra'
import path from 'path'
import yaml from 'js-yaml'
import { exec } from 'child_process'

// Let's use dotenv to also read .env files
import dotenv from 'dotenv'
dotenv.config()

axios.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`

const run = async () => {
  // parse the tag version and repository name
  const tag = process.env.TAG
  const repository = process.env.REPOSITORY
  const repo_name = process.env.REPO_NAME
  const template = `${repo_name} \`%s\` released`

  // get all the non-prerelease releases
  const releases = (await getAllReleases(repository)).filter(release => !release.prerelease)
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
  let markdown = parse(release.body)
  markdown = relativeToAbsoluteUrl(markdown, repository)
  markdown = codifyHashes(markdown)

  // build up the frontmatter
  const frontmatter = yaml.dump({
    applied_at: `${year}-${month}-${day}`,
    applies_to: process.env.TAGS.split(','),
    is_impactful: impactful,
    is_new_feature: newFeature,
    source_url: release.html_url
  })

  const content = `---\n${frontmatter}---\n\n# ${title}\n\n${markdown}`

  fs.ensureDirSync(path.dirname(filename))
  fs.writeFileSync(filename, content)

  exec('yarn lint:markdown')
}

const getAllReleases = async (repository, page=1) => {
  const response = await axios.get(`https://api.github.com/repos/${repository}/releases?page=${page}`)
  const releases = response.data
  if (releases.length === 0) { return releases }
  else return [...releases, ...(await getAllReleases(repository, page+1))]
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

const parse = (body) => String(remark()
  .use(referenceLinks)
  .use(github)
  .processSync(body))

const relativeToAbsoluteUrl = (content, repository) => {
  const regex = /\[(\d+)\]: \.\/(.*)/g
  return content.replace(regex, `[$1]: https://github.com/${repository}/blob/master/$2`)
}

const codifyHashes = (content) => {
  const regex = /\[([abcdef0123456789]{7})\]/g
  return content.replace(regex, `[\`$1\`]`)
}

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