
var executable = require('./lib/executable');
var vars = require('./lib/vars');
require('./lib/apply-env');

module.exports = {
    haxe: executable( vars.haxe.path, vars.haxe.args ),
    haxelib: executable( vars.haxelib.path, vars.haxelib.args ),
    neko: executable( vars.neko.path, vars.neko.args )
}

