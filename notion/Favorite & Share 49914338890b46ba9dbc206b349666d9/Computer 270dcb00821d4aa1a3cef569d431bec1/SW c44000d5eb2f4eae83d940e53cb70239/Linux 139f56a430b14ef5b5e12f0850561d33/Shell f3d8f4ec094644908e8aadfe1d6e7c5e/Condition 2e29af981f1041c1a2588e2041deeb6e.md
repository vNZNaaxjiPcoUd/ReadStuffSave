# Condition

i=2; while [ $i -le 10 ]; do if [ $i -ne 3 -a $i -ne 5 ]; then echo $i " not equal to 3 or 5"; else echo $i; fi; i=`expr $i + 1`; done