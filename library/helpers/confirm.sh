#!/usr/bin/env bash

function helper_confirm() {
	useConfirm=true

	if [ "$useConfirm" == true ]; then
		read -n 1 -s -r -p "${grey}$@:${reset} Press ${bold}Enter${reset} to continue, or ${bold}any key${reset} to skip." response
		echo
		case "$response" in
			"")
				return 0
				;;
			*)
				return 1
				;;
		esac
	fi
}
