import chalk from 'chalk'
import * as commander from 'commander'
import { generate } from './actions/generator'
import { askForInit } from './questions/inquirer'

commander.version('1.0.0').description('Generate command-line app in Node.js using TypeScript.')

commander
	.command('generate')
	.alias('G')
	.description('generate cli project')
	.action(async () => {
		console.log(chalk.yellow('=========***Command Line***==========\n'))
		const credentials = await askForInit()
		generate(credentials)
	})

if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
	commander.outputHelp()
	process.exit()
}
commander.parse(process.argv)
