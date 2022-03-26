/*
	Example
	The application's `example` subcommand
*/

/* Imports */
import { bold, cyan, parseArgs } from "../deps.ts";
import { command } from "../constants.ts";
import { success } from "../src/libs/messages.ts";

/* Constants */
export const meta = {
	subcommand: "example",
	description: "Description content.",
};

/* Get any arguments entered by the user */
const args = parseArgs(Deno.args);

/* The subcommand's instructions */
const instructions = `${bold(cyan(`${meta.subcommand}`))}
${meta.description}

${bold("Syntax:")} ${command} ${meta.subcommand} [arguments]

${bold("Arguments:")}
${bold("-h, --help")}		Displays usage examples and supported syntax.`;

/* Logic for the subcommand's `--help` argument */
const help = (): void => {
	console.info(instructions);
	Deno.exit();
};

/* Logic for the subcommand */
export const example = (): void => {
	if (args.h || args.help) help();

	success(`Subcommand complete!`);
};
