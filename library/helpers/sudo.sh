#!/usr/bin/env bash

function helper_sudo() {
	echo "Checking sudo privileges..."
	sudo -v
	sleep 1
	while true; do
		sudo -n true
		sleep 60
		kill -0 "$$" || exit
	done 2> /dev/null &
}
