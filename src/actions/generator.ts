import chalk from 'chalk'
import * as fs from 'fs-extra'
import * as ora from 'ora'
import * as path from 'path'

const cwd = path.dirname(__dirname)

export const generate = credentials => {
	;(async () => {
		try {
			const spinner = ora('Copying cli seed...').start()

			await fs.copy(`${cwd}/seed`, '.')

			spinner.succeed()
		} catch (err) {
			console.log(chalk.redBright(err))
		}
	})()
}
