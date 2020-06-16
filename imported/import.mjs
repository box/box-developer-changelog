import axios from 'axios'
import uslug from 'uslug'
import fs from 'fs-extra'
import path from 'path'
import yaml from 'js-yaml'

import dotenv from 'dotenv'

dotenv.config()

const org = 'box'
const repo = 'box-content-preview'
const tags = ['content-preview', 'sdks']
const titleTemplate = 'Content Preview'

axios.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;

const start = async () => {
  const list = await getAll(org, repo)
  
  let previousEntry = null
  for (let index = list.length-1; index >= 0; index--) {
    const entry = list[index]
    if (entry.prerelease) { continue }
    write(entry, previousEntry)
    previousEntry = entry    
  }
}

const getAll = async ({
  page = 1
}) => {
  const response = await axios.get(`https://api.github.com/repos/${org}/${repo}/releases?page=${page}`)
  const list = response.data

  if (list.length === 0) { return list }
  else { 
    const nextPage = page+1
    const rest = await getAll({ page: nextPage })
    return [...list, ...rest] 
  }
}

const write = (entry, previousEntry) => {
  const [year, month, day] = entry.published_at.split('T')[0].split('-')

  const title = `${titleTemplate} ${entry.tag_name} release`
  const slug = uslug(title)
  const filename = `imported/${repo}/${year}/${month}-${day}-${slug}.md`

  const body = entry.body
    .replace(/https:\/\/github.com\/.*\/.*\/compare\/(v\d+\.\d+\.\d+\.\.\.v\d+\.\d+\.\d+)/g, `[$1]($&)`)
    .replace(/#(\d+)/g, `[$&](https://github.com/${org}/${repo}/pull/$1)`)
    .replace(/[^[](\b[0123456789abcdef]{7}\b)/g, `[$1](https://github.com/${org}/${repo}/commit/$1)`)
    
  const oldVersion = previousEntry ? previousEntry.tag_name.replace('v', '') : '0.0.0'
  const newVersion = entry.tag_name.replace('v', '')

  const frontmatter = yaml.dump({
    applied_at: `${year}-${month}-${day}`,
    applies_to: tags,
    is_impactful: isImpactful(oldVersion, newVersion),
    is_new_feature: isNew(oldVersion, newVersion),
    source_url: entry.html_url
  })

  const content = `---\n${frontmatter}---\n\n# ${title}\n\n${body}`

  fs.ensureDirSync(path.dirname(filename))
  fs.writeFileSync(filename, content)
}

const isImpactful = (oldVersion, newVersion) => {
  const [oMajor] = oldVersion.split('.')
  const [nMajor] = newVersion.split('.')

  return nMajor > oMajor
}

const isNew = (oldVersion, newVersion) => {
  const [oMajor, oMinor] = oldVersion.split('.')
  const [nMajor, nMinor] = newVersion.split('.')

  return (nMajor > oMajor) || (nMinor > oMinor)
}


start()