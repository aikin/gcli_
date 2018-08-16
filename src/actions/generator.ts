import chalk from 'chalk'
import * as fs from 'fs-extra'
import * as ora from 'ora'
import * as path from 'path'

const cwd = path.dirname(__dirname)

export const generate = credentials => {
	;(async () => {
		console.log('credentials', credentials)
		console.log('credentials', cwd)
		try {
			const spinner = ora('Copying files...').start()

			await fs.copy(`${cwd}/seed`, '.')

			spinner.stop()
		} catch (err) {
			console.log(chalk.redBright(err))
		}
	})()
}
