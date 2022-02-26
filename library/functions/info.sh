#!/usr/bin/env bash

function function_info() {
	echo "${blue}${app_name} v${app_version}${reset}"
	echo "${app_description}"
	echo "Author: ${app_author} <${app_contact}>"
}
