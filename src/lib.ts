import { writeFileSync } from 'fs'

export async function init(path: string, options: object) {
  // Use options to constuct deployContents
  const deployContents = options

  // Write deployContents to shardus-deploy.json
  writeFileSync(path, JSON.stringify(deployContents, null, 2), { encoding: 'utf8' })
}
