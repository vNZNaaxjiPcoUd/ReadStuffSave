# Save wdav

# Save WDAV

This save the wdav stream to mp3 file. Run [recWdav.sh](http://recwdav.sh/) can do it.

## [recWdav.sh](http://recwdav.sh/)

```
#!/bin/sh

echo start rec

killall delaykill.sh

CNT="1"
SLEEPTIME="6000"
if [ "$1" -ge 60 ]; then
   SLEEPTIME=$1
fi

echo SLEEPTIME $SLEEPTIME

##SIZEQ="1m"

while [ $CNT ];do

	rm wdav-1*
	./delaykill.sh $SLEEPTIME &
	wget -d -T 60 --header="User-Agent: Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11" --header="Referer: <http://xmodulo.com/>" --header="Accept-Encoding: compress, gzip"  <http://audio-mp3.ibiblio.org:8000/wdav-112k>

#	PIDWDAV=$!
#	echo pid is $PIDWDAV
#	sleep $SLEEPTIME
#	killall wget

	killall delaykill.sh

	NAME=wdav_$(date +%y%m%d%H%M%S).mp3
	mv wdav-112k $NAME
	echo
	echo
	echo File $NAME
	CNT=$(($CNT + 1))
	echo $CNT
done
echo End rec

```

## [delaykill.sh](http://delaykill.sh/)

```
#!/bin/sh

echo start

SLEEPT=$1
sleep $SLEEPT
killall wget

```