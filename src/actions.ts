import { join, resolve } from 'path'
import { existsSync } from 'fs'
import { homedir } from 'os'
import inquirer = require('inquirer')
import * as lib from './lib.js'

export const init: ActionCallback = async (_args, _options, logger) => {
  const cwd = process.cwd()
  const deployPath = join(cwd, 'shardus-deploy.json')

  // Exit if a shardus-deploy.json file already exists
  if (existsSync(deployPath)) {
    logger.warn('shardus-deploy.json already exists')
    process.exit(0)
  }

  // Ask questions to configure deploy behavior
  const prompts = [
    {
      name: 'awsCredPath',
      default: resolve(join(homedir(), '.aws/credentials')),
      message: 'AWS credentials file?',
      validate: (input: string) => {
        if (input === '') return `AWS credentials file path cannot be null`
        if (!existsSync(input)) return `Cannot find ${input}`
        else return true
      }
    }
  ]

  const options = await inquirer.prompt(prompts)

  // Create a shardus-deploy.json file
  await lib.init(deployPath, options)
}
