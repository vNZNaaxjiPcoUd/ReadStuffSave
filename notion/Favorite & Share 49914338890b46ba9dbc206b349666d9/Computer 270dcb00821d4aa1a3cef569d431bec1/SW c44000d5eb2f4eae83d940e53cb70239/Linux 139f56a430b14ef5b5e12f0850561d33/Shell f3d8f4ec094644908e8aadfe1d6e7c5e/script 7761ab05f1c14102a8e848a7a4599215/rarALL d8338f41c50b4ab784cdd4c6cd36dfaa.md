# rarALL

#rarALL
#!/bin/sh

for orgFile in "$@"; do
echo "zip them '$orgFile'..."
rarFile=`basename "$orgFile" | sed 's@\\.[a-z][a-z][a-z]$@@'`."rar"
echo "$rarFile"
rar a "$rarFile" "$orgFile"
done