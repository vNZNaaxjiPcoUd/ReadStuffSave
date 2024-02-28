# Download PT

```jsx
# downloadpt.sh
#!/bin/bash
# need getlist file in same dir

rm -R htmlout
mkdir htmlout

cd htmlout
wget -k --html-extension -i ../ptlist
# for f in * ; do  mv -- "$f" "${f%}.html" ; done
cd ../

now=$(date +"%Y%m%d%H%M%S")
cp ./ptlist ./htmlout/.
tar cf bkPTon_$now.tar htmlout
zip -e bkPTon_$now.zip bkPTon_$now.tar
rm  bkPTon_$now.tar
# rm -R htmlout
```