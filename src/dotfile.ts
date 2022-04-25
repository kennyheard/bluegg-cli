/*
	Dotfile
	Logic related to the applications's dotfile stored in the user's current working directory
*/

/* Imports */
import { bold, config, italic } from "../deps.ts";
import { app } from "../src/constants.ts";
import { info, warning } from "./libraries/messages.ts";
import { fileExists } from "./libraries/filesystem.ts";

/* Create the dotfile using a series of user-entered values */
export const createDotfile = async (): Promise<boolean> => {
	const filepath = `${Deno.cwd()}/${app.dotfile}`;

	/* If the dotfile already exists, confirm whether or not it should be overwritten */
	if (await fileExists(filepath)) {
		warning(`There's already a file named ${bold(app.dotfile)} in this directory.`);

		const confirmed = confirm("Overwrite this file?");
		if (!confirmed) return false;
	} else {
		info(`Creating a new ${bold(app.dotfile)} file in this directory...`);
	}

	const productionServerAddress = prompt(
		`Enter the ${bold(italic("production"))} server's SSH address:`,
	);

	const productionServerUsername = prompt(
		`Enter the ${bold(italic("production"))} server's SSH username:`,
	);

	const productionDatabaseName = prompt(
		`Enter the ${bold(italic("production"))} server's database name:`,
	);

	const productionDatabaseUsername = prompt(
		`Enter the ${bold(italic("production"))} server's database username:`,
	);

	const productionDatabasePassword = prompt(
		`Enter the ${bold(italic("production"))} server's database password:`,
	);

	const stagingServerAddress = prompt(
		`Enter the ${bold(italic("staging"))} server's SSH address:`,
		productionServerAddress as string,
	);

	const stagingServerUsername = prompt(
		`Enter the ${bold(italic("staging"))} server's SSH username:`,
	);

	const stagingDatabaseName = prompt(
		`Enter the ${bold(italic("staging"))} server's database name:`,
		productionDatabaseName as string,
	);

	const stagingDatabaseUsername = prompt(
		`Enter the ${bold(italic("staging"))} server's database username:`,
		productionDatabaseUsername as string,
	);

	const stagingDatabasePassword = prompt(
		`Enter the ${bold(italic("staging"))} server's database password:`,
		productionDatabasePassword as string,
	);

	const variables = [
		["PRODUCTION_SERVER_ADDRESS", productionServerAddress],
		["PRODUCTION_SERVER_USERNAME", productionServerUsername],
		["PRODUCTION_DATABASE_NAME", productionDatabaseName],
		["PRODUCTION_DATABASE_USERNAME", productionDatabaseUsername],
		["PRODUCTION_DATABASE_PASSWORD", productionDatabasePassword],
		["STAGING_SERVER_ADDRESS", stagingServerAddress],
		["STAGING_SERVER_USERNAME", stagingServerUsername],
		["STAGING_DATABASE_NAME", stagingDatabaseName],
		["STAGING_DATABASE_USERNAME", stagingDatabaseUsername],
		["STAGING_DATABASE_PASSWORD", stagingDatabasePassword],
	];

	/* Format the array of values into a string suitable for output to the dotfile */
	const variablesString = variables
		.map((variable) => {
			return variable.join("=");
		})
		.join("\n");

	/* Generates the new dotfile and outputs the variables */
	await Deno.writeTextFile(filepath, variablesString);

	/* Exports the variables for use throughout the application */
	await config({ path: filepath, export: true });

	return true;
};
