# shell condition

i=2; while [ $i -le 10 ]; do if [ $i -ne 3 -a $i -ne 5 ]; then echo $i " not equal to 3 or 5"; else echo $i; fi; i=`expr $i + 1`; done

i=2; while [ $i -le 10 ]; do if [ $i -ne 3 -a $i -ne 5 ]; then echo $i " not equal to 3 or 5"; else echo $i; fi; i=`expr $i + 1`; done

i=2; while[$i -le 10]; do speedtest ; sleep 1 ; done

i=2; while[$i -le 10]; do echo "hello"  ; done

i=2; while [ $i -le 10 ]; do if [ $i -ne 3 -a $i -ne 5 ] echo $i " not equal to 3 or 5"; else echo $i; i=`expr $i + 1`; done

i=2; while [ $i -le 10 ]; do echo hello; done

i=2; while[$i -le 10]; do echo "hello"  ; done

i=2; while [ $i -le 10 ]; do speedtest; sleep 600  ; done

i=0; j=10; while [ $i -le 10 ]; do echo $j; if [ $j -le 5 ]; then j=10; fi; j=`expr $j - 1`; done

i=0; while [ $i -le 200 ]; do echo $i; i=`expr $i + 1`; done