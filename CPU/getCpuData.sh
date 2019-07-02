#!/bin/bash

## Mengambil data Cpu sesuai keinginan ##

getData=$((top -b -n 1 -d.1 | grep ^top | cut -b 7-11 && top -b -n 1 -d.1 | grep ^%Cpu) | paste -d"\t" -s)
timeFile=$(date "+%F")
while IFS= read -r line
do
 echo "$line"
## eksekusi command dan masukin ke folder google drivenya ##
done <<< $getData >> /home/wahid/google-drive/Cpu/$timeFile.txt

## Dokumentasi ##
### https://github.com/gdrive-org/gdrive
### https://www.techrepublic.com/article/how-to-mount-your-google-drive-on-linux-with-google-drive-ocamlfuse/
