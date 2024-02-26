# cutline.py

```jsx
o=open("out.txt",'w')
with open('rand.txt') as f:
    line = f.readline()
    while line:
        print(line)
        e=len(line)
        s=0
        gap=100
        while s < e-1:
        	if s+gap < e-1:
        		o.write(line[s:s+gap])
        		o.write("\n")
        	else:
        		o.write(line[s:e-1])
        		o.write("\n")
        	s=s+gap
        line = f.readline()
        		
f.close()
o.close()
```