#!/usr/bin/env node

import * as prog from 'caporal'
import { register } from '../src/commands'

prog
  .bin('shardus-init')
  .name('Shardus Init')
  .version('1.0.0')

for (const command of Object.keys(register)) {
  register[command](prog)
}

prog.parse(process.argv)
