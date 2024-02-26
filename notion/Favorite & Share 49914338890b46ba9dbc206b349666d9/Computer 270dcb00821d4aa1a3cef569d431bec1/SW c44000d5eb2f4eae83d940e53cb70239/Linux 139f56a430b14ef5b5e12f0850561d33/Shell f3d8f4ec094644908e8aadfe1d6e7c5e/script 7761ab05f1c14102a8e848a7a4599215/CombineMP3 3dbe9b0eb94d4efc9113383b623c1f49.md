# CombineMP3

#CombineMP3
#!/bin/sh

cat "$1"/*.mp3 > "$1".out
mv "$1".out "$1".mp3