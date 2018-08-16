import chalk from 'chalk'
import * as fs from 'fs-extra'
import * as mustache from 'mustache'
import * as ora from 'ora'
import * as path from 'path'

const cwd = path.dirname(__dirname)

export const generate = credentials => {
	;(async () => {
		try {
			const spinner = ora('Copying cli seed...').start()

			await fs.copy(`${cwd}/seed`, '.')

			const packageContent = fs.readFileSync(`./package.json`, 'utf8')
			const updatedPackageContent = mustache.render(packageContent, credentials)
			fs.writeFileSync('./package.json', updatedPackageContent)

			const cliTestContent = fs.readFileSync(`./src/__test__/cli.ts`, 'utf8')
			const updatedCliTestContent = mustache.render(cliTestContent, credentials)
			fs.writeFileSync('./src/__test__/cli.ts', updatedCliTestContent)

			const cliContent = fs.readFileSync(`./bin/cli_`, 'utf8')
			const updatedCliContent = mustache.render(cliContent, credentials)
			fs.writeFileSync('./bin/cli_', updatedCliContent)

			fs.renameSync('./src/__test__/cli.ts', `./src/__test__/${credentials.cliName}.ts`)
			fs.renameSync('./src/cli.ts', `./src/${credentials.cliName}.ts`)
			fs.renameSync('./bin/cli_', `./bin/${credentials.cliName}`)

			spinner.succeed()
		} catch (err) {
			console.log(chalk.redBright(err))
		}
	})()
}
