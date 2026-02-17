function updateMintlifyChangelogIndex({ componentName, filePath, indexContent } = {}) {
  if (!componentName || typeof componentName !== 'string') {
    throw new Error('Missing required "componentName".')
  }

  if (!filePath || typeof filePath !== 'string') {
    throw new Error('Missing required "filePath".')
  }

  if (typeof indexContent !== 'string') {
    throw new Error('Missing required "indexContent".')
  }

  const importStatement = `import ${componentName} from "/${filePath.replace(/^\/+/, '')}";`
  const componentUsage = `<${componentName} />`

  // Idempotency: if this entry already exists, do not mutate the content.
  if (indexContent.includes(importStatement) || indexContent.includes(componentUsage)) {
    return indexContent
  }

  const lineEnding = indexContent.includes('\r\n') ? '\r\n' : '\n'
  const { contentWithImport } = insertImport({
    content: indexContent,
    importStatement,
    lineEnding
  })

  const componentLineMatch = /^<[A-Z][A-Za-z0-9_]*\s*\/>\s*$/m.exec(contentWithImport)
  if (componentLineMatch) {
    const insertion = `${componentUsage}${lineEnding}${lineEnding}`
    const insertAt = componentLineMatch.index
    return contentWithImport.slice(0, insertAt) + insertion + contentWithImport.slice(insertAt)
  }

  // Empty index edge case: no existing component usage lines.
  const trimmed = contentWithImport.replace(/\s*$/, '')
  if (!trimmed) {
    return `${importStatement}${lineEnding}${lineEnding}${componentUsage}`
  }

  return `${trimmed}${lineEnding}${lineEnding}${componentUsage}`
}

function insertImport({ content, importStatement, lineEnding }) {
  const frontmatterMatch = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(content)
  if (!frontmatterMatch) {
    throw new Error('Unable to locate YAML frontmatter in changelog/index.mdx.')
  }

  const frontmatterEndIndex = frontmatterMatch[0].length
  const contentWithImport = content.slice(0, frontmatterEndIndex) + importStatement + lineEnding + content.slice(frontmatterEndIndex)

  return { contentWithImport, frontmatterEndIndex }
}

module.exports = {
  updateMintlifyChangelogIndex
}
