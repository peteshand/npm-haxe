var vars = require('./vars');

process.env.PATH = process.env.PATH + vars.haxe.dir + ";";
process.env.PATH = process.env.PATH + vars.neko.dir + ";";

process.env.HAXELIB_PATH =  vars.env.HAXELIB_PATH;
process.env.HAXEPATH = vars.haxe.dir;
process.env.HAXE_STD_PATH =  vars.env.HAXE_STD_PATH;