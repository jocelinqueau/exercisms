#!/usr/bin/env bash

# if no argument return 0
if [ $# -ne 2  ]; then
  echo "Usage: hamming.sh <string1> <string2>"
  exit 1
fi

if [ ${#1} -ne ${#2} ]; then
  echo "strands must be of equal length"
  exit 1
fi

hamming=0
for (( i=0; i<${#1}; i++ )); do
  # ${1:$i:1} start at position $i and take 1 character
  if [ "${1:$i:1}" != "${2:$i:1}" ]; then
    ((hamming++))
  fi
done

echo $hamming