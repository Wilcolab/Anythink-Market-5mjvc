#!/bin/bash

awk -F, '$4 ~ /[aA]mazon.com/' $1 | awk -F "\"*,\"*" '{print $3,$2}' >> newout.txt
