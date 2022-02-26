#!/usr/bin/env bash

function function_help() {
	function_info
	echo
	echo "${bold}Syntax:${reset} ${base_command} [command] [argument] | [option]"
	echo
	echo "${bold}Commands:${reset}"
	echo
	echo "${blue}example${reset}"
	echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	echo
	echo "${bold}Options:${reset}"
	echo "${bold}-h, --help${reset}${tab}${tab}Displays usage examples and supported syntax."
	echo "${bold}-i, --info${reset}${tab}${tab}Displays information on the tool and its author(s)."
	echo "${bold}-v, --version${reset}${tab}${tab}Displays the currently installed version of the tool."
	echo
}
