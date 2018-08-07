import chalk from 'chalk'
import * as commander from 'commander'
import { askForInit } from './questions/inquirer'
import {generate} from './actions/generator'


commander.version('1.0.0').description('A command line seed')

commander
	.command('repo')
	.alias('r')
	.description('Fetch github repos')
	.action( async () => {
		console.log(chalk.yellow('=========***Command Line***==========\n'))
		const credentials = await askForInit()
		generate(credentials)
	})

if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
	commander.outputHelp()
	process.exit()
}
commander.parse(process.argv)
