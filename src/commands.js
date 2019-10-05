"use strict";
exports.__esModule = true;
var actions = require("./actions");
var register = {
    create: function (prog, namespace) {
        prog
            .command((namespace ? namespace + ' ' : '') + "init", 'Initialize CloudFormation templates for your shardus app')
            .action(actions.init);
    }
};
exports.register = register;
