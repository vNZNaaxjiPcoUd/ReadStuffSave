# rename all

for f in *.mp4 ; do  mv -- "$f" "${f%}.4mp" ; done

for f in *.4mp ; do  x=$(dirname $f) ; y=${f:2} ; echo $y  ; done

x=$(dirname $f)  #get the name of the file with the directory
y=${x:2}         #remove ./ from the name
echo $(basename $f) \($y\)

rename "s/\.mp4\.4mp/\.4pm/" *
rename "s/\.mp4/\.4pm/" *.mp4
rename "s/\.4pm/\.avj/" *.4pm

files=`ls -1 *.4mp` ; for x in $files ; do  mv $x "`basename $files .4mp`.4pm" ; done

for f in *.m4a ;do ffe=$(echo $f | awk '{print $2}');echo $f;echo $ffe;mv "$f" "$ffe";done