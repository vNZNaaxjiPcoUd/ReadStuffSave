# MP3toMP4 ffmpeg

#MP3toMP4 ffmpeg
#! /usr/bin/env python
import sys, os
inputOne = sys.argv[1]  inputTwo = sys.argv[2]

for i in sys.argv[1:]:  if '.mp3' in i:  output = i.replace('mp3','mp4')

cmd = 'ffmpeg -loop 1 -i "'+inputOne+'" -i "'+inputTwo+'" -c:a aac -ab 112k -c:v libx264 -shortest -strict -2 "'+output+'"'

os.system(cmd)