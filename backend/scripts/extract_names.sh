#!/bin/bash

grep -i "@amazon.com" $1 | awk -F, '{print $3, $2}' >> output_names.txt
