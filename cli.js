#!/usr/bin/env node
'use strict';
const meow = require('meow');
const flowInit = require('.');

const cli = meow(`
	Usage
	  $ flow-init

	Examples
	  $ flow-init
	   > Will scaffhold flow for you ... Magic 🎉
`);
// Cli.input[0] || ''
flowInit();
