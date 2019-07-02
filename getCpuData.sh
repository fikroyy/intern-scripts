#!/bin/bash

## Mengambil data Cpu sesuai keinginan ##

getData=$((top -b -n 1 -d.1 | grep ^top | cut -b 7-11 && top -b -n 1 -d.1 | grep ^%Cpu) | paste -d"\t" -s)
timeFile=$(date "+%F")
while IFS= read -r line
do
 echo "$line"
done <<< $getData >> /home/wahid/google-drive/Cpu/$timeFile.txt

## langsung upload ke google drive ##

#/home/wahid/./gdrive delete 1VlCklYGxczxb6wh4JpsiEs-EA0SPCqJ1
#/home/wahid/./gdrive upload --parent 1d2li2FjAmydgnBwSoj01ZuIG1IT0YFHv /home/wahid/cpu/$timeFile.txt
#/home/wahid/./gdrive update 1oI5Lf2nby_OvZco7GCw8m_YTIqto3o4O /home/wahid/cpu/$timeFile.txt

## Dokumentasi = https://github.com/gdrive-org/gdrive ##
