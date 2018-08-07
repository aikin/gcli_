import * as inquirer from 'inquirer'
import { Questions } from 'inquirer'

export const askForInit = () => {
	const questions: Questions = [
		{
			type: 'input',
			name: 'projectName',
			message: 'What is the name of the project?',
			default: 'gcli_',
			validate: (value) => {
				if (value.length) {
					return true
				}
				return 'Please enter your project name.'
			}
		},
		{
			type: 'input',
			name: 'projectDesc',
			message: 'What is the description?',
			default: 'Generate command-line app in Node.js using TypeScript.',
			validate: (value) => {
				if (value.length) {
					return true
				}
				return 'Please enter your project description.'
			}
		},
		{
			type: 'input',
			name: 'cliName',
			message: 'What will the CLI name be (e.g. `yarn`, `gulp` etc)?',
			default: 'gcli_',
			validate: (value) => {
				if (value.length) {
					return true
				}
				return 'Please enter your CLI name.'
			}
		},
		{
			type: 'input',
			name: 'authorName',
			message: 'What is the author\'s name?',
			default: 'aikin',
			validate: (value) => {
				if (value.length) {
					return true
				}
				return 'Please enter your author name.'
			}
		},
		{
			type: 'input',
			name: 'authorUrl',
			message: 'What is the author\'s URL?',
			default: 'https://github.com/aikin',
			validate: (value) => {
				if (value.length) {
					return true
				}
				return 'Please enter your author URL.'
			}
		}
	]
	return inquirer.prompt(questions)
}
