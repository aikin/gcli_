import * as inquirer from 'inquirer'
import { Question } from 'inquirer'

export const askUsername = () => {
	const username: Question = {
		type: 'input',
		name: 'username',
		message: 'Enter username'
	}
	return inquirer.prompt(username)
}
