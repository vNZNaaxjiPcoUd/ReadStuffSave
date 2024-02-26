# duration screen change

```jsx
# show test

Sleep=$1 
Smallest=1 

SA=""
BL=" "
for j in {1..10000};
do
    SA="$SA:)~"
    BL="$BL   "
done

while [ $(($Sleep)) -gt $Smallest ]
do

    echo $SA
    date

    sleep 1

    for i in {1..100};
    do
        echo " "
    done
    date
    echo "Sleep " $Sleep
    sleep $Sleep
done
```