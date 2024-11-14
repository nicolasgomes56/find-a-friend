import chalk from 'chalk';
import { app } from './app';

app
	.listen({
		host: '0.0.0.0',
		port: 3333,
	})
	.then((address) => {
		console.log(chalk.green(`Server listening on ${address}`));
	})
	.catch((error) => {
		console.error(chalk.red(error.message));
		process.exit(1);
	});
