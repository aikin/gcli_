import chalk from 'chalk'
import * as commander from 'commander'

import { fetchRepos } from './actions/github'
import { askUsername } from './questions/inquirer'

commander.version('1.0.0').description('A command-line app seed in Node.js using TypeScript.')

commander
	.command('repo')
	.alias('R')
	.description('Demo of fetch github repos.')
	.action(async () => {
		console.log(chalk.yellow('=========***Command Line***==========\n'))

		const credential = await askUsername()

		fetchRepos(credential.username)
	})

if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
	commander.outputHelp()
	process.exit()
}
commander.parse(process.argv)
