##Array Iteration methods

### 1. for loop
```javascript
const array = [1,2,3];
for(let i=0; i<array.length; i+=>){
	console.log(i);
}
```
### 2. forEach

```javascript
const array = [1,2,3];
array.forEach(item=>{
	console.log(item); 
});
```

### 3. array.filter();
```javascript
const array = [1,2,3,4];
array.filter(item=> item>1);
```
   
### 4. array.map()
```javascript
const array = ["1","2","3","4"];
const numbers = array.map(item=>parseInt(item, 10));
console.log(numbers);
```

### 5. array.find()

**array.find();** can be used to find an array item matching a specific description from a collection
	example:

```javascript
	const array = ["1","2","3","4"];
	array.find(item => item.id === "2");
```


### 6. array.reduce()
This method can be used to find the sum of numerical values in an array

```javascript
	const array = [1,2,3];
	array.reduce((acc, cur)=>{
		acc + cur;
	}, 0);
```




### Other array methods


**array.splice(index, x);** where x is the number of array items to be removed from index going forward

