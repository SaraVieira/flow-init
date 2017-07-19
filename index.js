'use strict';

const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const writeFile = require('write');

const ora = require('ora');
const chalk = require('chalk');
const sh = require('shelljs');

const cwd = sh.pwd();
const regex = /\r\n/g;
const newline = '\n';
const babel = path.join(__dirname, 'files', '.babelrc');
const babelrc = fs.readFileSync(babel);
const flow = path.join(__dirname, 'files', '.flowconfig');
const flowConfig = fs.readFileSync(flow);
const babelPath = path.join(process.cwd().replace(/\\/g, '/'), '.babelrc');
const flowPath = path.join(process.cwd().replace(/\\/g, '/'), '.flowconfig');

const commands = {
	flowBin: 'npm install --save-dev flow-bin',
	babelPlugins:
		'npm install --save-dev babel-plugin-transform-flow-strip-types babel-preset-env'
};

module.exports = () => {
	console.log(
		chalk.green(`
Awesome you started using flow 🎉
While we do this you can read: https://flow.org/en/docs/getting-started/
		`)
	);
	console.log(
		chalk.blue(`
First we will install Flow-Bin
		`)
	);

	const spinner = ora('Installing Flow-Bin').start();

	exec(commands.flowBin, { cwd }, error => {
		if (error) {
			spinner.fail(`exec error: ${error}`);
			return;
		}
		spinner.succeed('Flow-Bin Installed');
		console.log(
			chalk.blue(`
Now let's install awesome Babel Plugins
			`)
		);
		spinner.start('Installing Babel Plugins');

		exec(commands.babelPlugins, { cwd }, error => {
			if (error) {
				spinner.fail(`exec error: ${error}`);
				return;
			}
			spinner.succeed('Babel Plugins Installed');
			console.log(
				chalk.blue(`
Now let's create a .babelrc
				`)
			);
			spinner.start('Creating .babelrc');
			writeFile(
				babelPath,
				babelrc.toString().replace(regex, newline)
			).then(() => {
				spinner.succeed('.babelrc created');
				console.log(
					chalk.blue(`
Now let's create a .flowconfig
				`)
				);
				writeFile(
					flowPath,
					flowConfig.toString().replace(regex, newline)
				).then(() => {
					spinner.succeed('.flowconfig created');
				});
			});
		});
	});
};
