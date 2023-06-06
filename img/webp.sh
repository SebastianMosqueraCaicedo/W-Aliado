#! /bin/bash
for i in *png;
do name=`echo "$i" | cut -d'.' -f1`;
	ffmpeg -loglevel quiet -i "$i" "${name}.webp";
done;
ls *png > pngs.txt;
for i in *jpg;
do name=`echo "$i" | cut -d'.' -f1`;
	ffmpeg -loglevel quiet -i "$i" "${name}.webp";
done;
ls *jpg > jpg.txt;
