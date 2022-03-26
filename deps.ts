/*
	Dependencies
	Third-party modules and libraries that the application relies upon
*/

/* A module to print ANSI terminal colours */
export { bold, cyan, green, red, yellow } from "https://deno.land/std/fmt/colors.ts";

/* A command line arguments parser */
export { parse as parseArgs } from "https://deno.land/std/flags/mod.ts";
