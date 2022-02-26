#!/usr/bin/env bash

while [ "$#" -gt 0 ]; do
	case "${1}" in
		-h | --help)
			function_help
			exit 0
			;;
		-i | --info)
			function_info
			exit 0
			;;
		-v | --version)
			echo "${app_version}"
			exit 0
			;;
		-* | --*)
			echo "${red}Error:${reset} \"${1}\" is not a recognised option."
			exit 0
			;;
		*)
			break
			;;
	esac
done
