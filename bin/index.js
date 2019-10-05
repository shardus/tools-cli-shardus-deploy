#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var prog = require("caporal");
var commands_1 = require("../src/commands");
prog
    .bin('shardus-init')
    .name('Shardus Init')
    .version('1.0.0');
for (var _i = 0, _a = Object.keys(commands_1.register); _i < _a.length; _i++) {
    var command = _a[_i];
    commands_1.register[command](prog);
}
prog.parse(process.argv);
