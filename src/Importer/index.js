import dotenv from 'dotenv'

import { GitHub } from './github'
import { Formatter } from './Formatter'
import { Writer } from './Writer'

// Dotenv used in development mode
dotenv.config()

class Importer {
  async importRelease({ destination }) {
    // Inititalize the basic inputs
    const repository = process.env.REPOSITORY
    const titleTemplate = `${process.env.REPO_DISPLAY_NAME} \`%s\` released`
    const tag = process.env.TAG
    const token = process.env.GITHUB_TOKEN
    const labels = process.env.LABELS
  
    // Initialize the 3 helper classes
    const github = new GitHub({ repository, token, tag })
    const formatter = new Formatter({ titleTemplate, labels, repository })
    const writer = new Writer({ destination })
  
    // Determine the current and previous release
    const { currentRelease, previousRelease } = await github.relevantReleases()
    // Determine the filename and markdown of the release note
    const { filename, markdown } = formatter.format({ currentRelease, previousRelease })
    // Write the markdown to the file
    writer.write({ filename, markdown })
  }
}


export default Importer