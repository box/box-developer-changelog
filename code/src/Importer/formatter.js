
import remark from 'remark'
import github from 'remark-github'
import referenceLinks from 'remark-reference-links'
import yaml from 'js-yaml'
import util from 'util'
import uslug from 'uslug'
import markdownlint from 'markdownlint'
import markdownlintRuleHelpers from 'markdownlint-rule-helpers'

/**
 * A helper class for converting a current release into the content needed too
 * write the release note to file.
 */
class Formatter {
  /**
   * Initialize the class with a template for the title, a list of labels, and
   * the name of the repository the release came from.
   */
  constructor({ titleTemplate, labels, repository }) {
    this.titleTemplate = titleTemplate
    this.labels = labels.split(',')
    this.repository = repository
  }

  /**
   * Convert a current and a previous rease into the markdown and filename of
   * the file.
   */
  format({ currentRelease, previousRelease }) {
    const title = util.format(this.titleTemplate, currentRelease.tag_name)

    return {
      markdown: this.markdown({ currentRelease, previousRelease, title }),
      filename: this.filename({ currentRelease, title })
    }
  }

  // PRIVATE


  /**
   * Determines the markdown body of the file, including the frontmatter.
   *
   * It automatically applies some transformations to the markdown.
   */
  markdown({ currentRelease, previousRelease, title }) {
    const markdown = this.sanitize(currentRelease.body)
    // determine the frontmatter foor the file
    const frontmatter = this.frontmatter({ currentRelease, previousRelease })
    // assemble the title, markdown, and frontmatter
    return `---\n${frontmatter}---\n\n# ${title}\n\n${markdown}`
  }

  /**
   * Convert the body to markdown, appplying
   * rules to convert github syntax to links, and extracting all
   * links to be reference links at the bottom of the file} body
   */
  sanitize(body) {
    let markdown = String(remark()
      .use(github, { repository: this.repository, mentionStrong: false })
      .use(referenceLinks)
      .processSync(body))

    // convert any relative URLs to absolute URLs
    markdown = this.convertRelativeToAbsoluteUrls({ markdown })
    // make sure to wrap any Git hash in backticks
    markdown = this.codifyHashes({ markdown })
    // make sure to wrap any GitHub usernames in backticks
    markdown = this.codifyUsernames({ markdown })
    // // apply markdown lint fixes
    markdown = this.fixMarkdown({ markdown })
    return markdown
  }

  /**
   * Determines the frontmatter for the file based on the current and previous
   * release
   */
  frontmatter({ currentRelease, previousRelease }) {
    // split the date into year, month, and day
    const [year, month, day] = currentRelease.published_at.split('T')[0].split('-')
    // determine if the difference between the current and the previous release
    // imply an impactful release or a new feature.
    const { impactful, newFeature } = this.determineImpact({ currentRelease, previousRelease })

    // convert the metadata to yaml
    return yaml.dump({
      // the date this entry applies at (which is the same as the date in the
      // file name but could be different in hand written files)
      applied_at: `${year}-${month}-${day}`,
      // the projects this release note applies to, for example `sdks,node`
      applies_to: this.labels,
      // wether this change was an increase in the Major version
      is_impactful: impactful,
      // wether this change was an increase in the Minor version
      is_new_feature: newFeature,
      // the original URL of the release note
      release_source_url: currentRelease.html_url,
      // by default we set imports to be collapsed
      collapse: true
    })
  }

  /**
   * Determines if the difference between the current and the previous release
   * imply an impactful release or a new feature, based on the version numbers
   */
  determineImpact({ currentRelease, previousRelease }) {
    // get the current version number
    const currentVersion = currentRelease.tag_name.replace('v', '')
    // get the previous version number, or default to 0.0.0
    const previousVersion = previousRelease ? previousRelease.tag_name.replace('v', '') : '0.0.0'

    // determine the 2 keys features
    return {
      newFeature: this.isNewFeature({ previousVersion, currentVersion }),
      impactful: this.isImpactful({ previousVersion, currentVersion })
    }
  }

  /**
   * Determines if the difference between the current and previous version implies
   * that the change was impactful.
   */
  isImpactful({ previousVersion, currentVersion }) {
    const [pMajor] = previousVersion.split('.')
    const [cMajor] = currentVersion.split('.')
    return cMajor > pMajor
  }

  /**
   * Determines if the difference between the current and previous version implies
   * that the change includes a new feature.
   */
  isNewFeature({ previousVersion, currentVersion }) {
    const [pMajor, pMinor] = previousVersion.split('.')
    const [cMajor, cMinor] = currentVersion.split('.')
    return (cMajor > pMajor) || (cMinor > pMinor)
  }

  /**
   * Converts relative URLs to absolute URLs by prefixing the repository URL to it
   */
  convertRelativeToAbsoluteUrls({ markdown }) {
    const regex = /\[(\d+)\]: \.\/(.*)/g
    return markdown.replace(regex, `[$1]: https://github.com/${this.repository}/blob/master/$2`)
  }

  /**
   * Wraps a git hash in backticks:
   *
   * [abc123a] => [`abc123a`]
   */
  codifyHashes({ markdown }) {
    const regex = /\[([abcdef0123456789]{7})\]/g
    return markdown.replace(regex, `[\`$1\`]`)
  }

  /**
   * Wraps a GitHub uername in backticks:
   *
   * [@cbetta] => [`@cbetta`]
   */
  codifyUsernames({ markdown }) {
    const regex = /\[(@\w*)\]/g
    return markdown.replace(regex, `[\`$1\`]`)
  }

  /**
   * Applies any obvious to fix markdown mistakes using mardownlint
   */
  fixMarkdown({ markdown }) {
    // checks the markdown and determines a list of fixes
    const fixes = markdownlint.sync({ strings: { content: markdown }, resultVersion: 3 })
      .content
      .filter(error => error.fixInfo)

    if (fixes.length <= 0) { return markdown }
    else return markdownlintRuleHelpers.applyFixes(markdown, fixes)
  }

  /**
   * Determines the filename for this released based on the release date and
   * title.
   */
  filename({ currentRelease, title }) {
    const [year, month, day] = currentRelease.published_at.split('T')[0].split('-')
    const slug = uslug(title)
    return `${year}/${month}-${day}-${slug}.md`
  }
}

export { Formatter }