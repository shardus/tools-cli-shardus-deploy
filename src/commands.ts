import * as actions from './actions'

const register: { [index: string]: (prog: Caporal, namespace?: string) => void } = {
  create(prog, namespace) {
    prog
      .command(`${namespace ? namespace + ' ' : ''}init`, 'Initialize CloudFormation templates for your shardus app')
      .action(actions.init)
  }
}

export { register }
