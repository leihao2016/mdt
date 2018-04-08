#! /usr/bin/env node
'use strict';

var 
	program = require('commander'),
	fs = require('fs'),
	create = require('../lib/create.js');

var createOptions = {
	html: false,
	tpl: false,
	dwt: false,
	js: false,
	css: false,
	project: false
};

program
	.version('1.0.0', '-v, --version')
	.usage('mdt <command>')
	.description('meilele developer toolkit')
	.allowUnknownOption();

// command 'create'
program	
	.command('create <name>')	
	.description('create a file[-html, -tpl, -dwt, -js, -css] or project')
	.option('-h, --html', 'create a html file')
	.option('-t, --tpl', 'create a tpl file')
	.option('-d, --dwt', 'create a dwt file')
	.option('-j, --js', 'create a js file')
	.option('-c, --css', 'create a css file')
	.option('-p, --project', 'create a project')
	.action(function(name, options){
		var type = '';
		for (var k in createOptions) {
			if (options[k]) {
				type = k;
				break;
			}
		}
		create(name, type);
	});

// command 'widget'	
program
	.command('widget', 'get a widget from server')
	.action(function(name, options){

	});


program.parse(process.argv);