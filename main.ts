/*
	Main
	The application's entry point
*/

/* Imports */
import { bold, cyan, parseArgs } from "./deps.ts";
import { author, command, contact, description, name } from "./constants.ts";
import { version } from "./version.ts";
import { error } from "./src/libs/messages.ts";
import { example, meta as exampleMeta } from "./src/example.ts";

/* The command's instructions */
const instructions = `${bold(cyan(`${name} ${version}`))}
${bold(`${description}`)}
Author: ${author} <${contact}>

${bold("Syntax:")} ${command} [subcommand] | [arguments]

${bold("Subcommands:")}

${bold(cyan(`${exampleMeta.subcommand}`))}
${exampleMeta.description}

${bold("Arguments:")}
${bold("-v, --version")}		Displays the installed version of the application.
${bold("-h, --help")}		Displays usage examples and supported syntax.`;

/* Get any arguments entered by the user */
const args = parseArgs(Deno.args);

/* Get the subcommand entered by the user */
const subcommand = args._.shift();

/* Process the subcommand or argument entered by the user */
if (subcommand) {
	if (subcommand === "example") example();
	else {
		error(
			`"${subcommand}" is not a recognised subcommand. Run ${bold(`${command} --help`)} for help.`,
		);
	}
} else {
	if (args.v || args.version) console.info(name, version);
	else if (args.h || args.help) console.info(instructions);
	else {
		error(
			`Enter a recognised subcommand or argument(s). Run ${bold(`${command} --help`)} for help.`,
		);
	}
	Deno.exit();
}
