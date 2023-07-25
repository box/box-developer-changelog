import inquirer from 'inquirer'
import handlebars from 'handlebars'
import fs from 'fs'
import path from 'path'
import uslug from 'uslug'
import randomstring from 'randomstring'
import yaml from 'js-yaml'

// A regex to validate the date
const dateRegex = new RegExp(/^\d\d\d\d-\d\d-\d\d$/)

// Imports the template into a handlebar template
const content = String(fs.readFileSync('./templates/standard.md'))
const template = handlebars.compile(content);

// The script that's run
const run = async () => {
  // The list of questions we need answers to
  const answers = await inquirer.prompt([
    { 
      type: 'input',
      name: 'title',
      message: 'What is a short title for this release?',
      default: "Box CLI `1.0.1` release",
      validate: (title) => title.length >= 3 && title.length <=50
    },
    { 
      type: 'input',
      name: 'applied_at',
      message: 'When will this release go into effect? This may be a date in the past.',
      default: new Date().toISOString().split('T')[0],
      validate: (date) => dateRegex.test(date)
    },
    { 
      type: 'input',
      name: 'published_at',
      message: 'When will this release be published? This can be an estimate.',
      default: new Date().toISOString().split('T')[0],
      validate: (date) => dateRegex.test(date)
    },
    { 
      type: 'checkbox',
      name: 'applies_to',
      message: 'What projects will this apply to? Please select any that apply.',
      choices: [
        `api`,
        `node`,
        `python`,
        `java`,
        `windows`,
        `cli`,
        `ui-elements`,
        `reports`,
        `salesforce`,
        `ios`,
        `android`,
        `sdks`,
        `guides`
      ],
      validate: (list) => list.length > 0
    },
    { 
      type: 'confirm',
      name: 'is_impactful',
      message: 'Is this an impactful/breaking change?'
    },
    { 
      type: 'confirm',
      name: 'is_new_feature',
      message: 'Is this a new feature and not just a bug fix?'
    }
  ])

  // Compile the template with the answers to get our markdown
  answers.applies_to = `\n${yaml.dump(answers.applies_to).trim()}`
  const markdown = template(answers)

  // Determine the file name
  const [year, month, day] = answers['published_at'].split('-')
  const slug = uslug(answers['title'])
  let filename = `./content/${year}/${month}-${day}-${slug}.md`
  
  // If by chance a file already exists with that name, append a random ID to
  // the name of the file
  if (fs.existsSync(filename)) {
    const id = randomstring.generate({ length: 5, charset: 'alphabetic' })
    filename = `./content/${year}/${month}-${day}-${slug}-${id}.md`
  }

  // if the directory doesn't exist, create it
  const directory = path.dirname(filename)
  if (!fs.existsSync(directory)) { fs.mkdirSync(directory) }
  // Write the file content
  fs.writeFileSync(filename, markdown)
  // Output the name of the file created
  console.dir(filename)
}

run()