#!/usr/bin/env bash

lockfile="/tmp/${app_id}.lock"

if [ -f "$lockfile" ]; then
	echo "${blue}${app_name}${reset} is already running somewhere..."
	exit
fi

trap "rm -f $lockfile" EXIT

touch $lockfile
