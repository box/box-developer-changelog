function convertReleaseToMintlifyEntry({
  repoDisplayName,
  labels,
  version,
  publishedAt,
  body
} = {}) {
  if (!repoDisplayName || typeof repoDisplayName !== 'string') {
    throw new Error('Missing required "repoDisplayName".')
  }

  if (!version || typeof version !== 'string') {
    throw new Error('Missing required "version".')
  }

  if (!publishedAt || typeof publishedAt !== 'string') {
    throw new Error('Missing required "publishedAt".')
  }

  const { year, month, day, labelDate } = parsePublishedDate(publishedAt)
  const mappedTags = mapLabelsToTags(labels)
  const normalizedVersion = normalizeVersion(version)
  const isIosRelease = isIos({ labels, repoDisplayName })
  const componentVersion = isIosRelease ? normalizedVersion : `V${normalizedVersion}`
  const componentName = `${toPascalCase(repoDisplayName)}${componentVersion}Released_${year}_${month}_${day}`
  const slug = `${slugify(repoDisplayName)}-v${normalizedVersion.toLowerCase()}-released`
  const filePath = `snippets/changelog/${year}/${month}-${day}-${slug}.mdx`
  const markdownBody = String(body || '').trimEnd()

  const mdxContent =
    `<Update label="${labelDate}" tags={${JSON.stringify(mappedTags)}}>\n` +
    `## ${repoDisplayName} \`${version}\` released\n\n` +
    `${markdownBody}\n` +
    `</Update>`

  return {
    mdxContent,
    filePath,
    componentName
  }
}

function mapLabelsToTags(labels) {
  return String(labels || '')
    .split(',')
    .map((label) => label.trim())
    .filter(Boolean)
    .map((label) => {
      const lower = label.toLowerCase()
      if (lower === 'sdks') {
        return 'SDKs'
      }
      if (lower === 'ios') {
        return 'iOS'
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
}

function normalizeVersion(version) {
  const cleaned = version
    .replace(/^[vV]/, '')
    .replace(/[^A-Za-z0-9]/g, '')

  if (!cleaned) {
    throw new Error(`Invalid "version": "${version}"`)
  }

  return cleaned
}

function parsePublishedDate(publishedAt) {
  const [datePortion] = publishedAt.split('T')
  const parts = datePortion ? datePortion.split('-') : []

  if (parts.length !== 3 || parts.some((part) => !part)) {
    throw new Error(`Invalid "publishedAt" date: "${publishedAt}"`)
  }

  const [year, month, day] = parts

  return {
    year,
    month,
    day,
    labelDate: `${year}-${month}-${day}`
  }
}

function toPascalCase(value) {
  return String(value)
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('')
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function isIos({ labels, repoDisplayName }) {
  const labelParts = String(labels || '')
    .split(',')
    .map((label) => label.trim().toLowerCase())

  return labelParts.includes('ios') || String(repoDisplayName).toLowerCase().includes('ios')
}

module.exports = {
  convertReleaseToMintlifyEntry
}
