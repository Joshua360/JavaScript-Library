## Function Declarations vs function expression

### 1. Function Declaration
```javascript
    function functionName(parameter){
        console.log(parameter);

    }
```
The JavaScript engine moves function declarations to the top of their scope before code execution. This behavior is called: **Hoisting**



### 2. Function Expression
```javascript
    const functionName = function(parameter){
        console.log(parameter);

    }
```
The JavaScript engine DOES NOT MOVE function expressions to the top of their scope before code execution. Therefore, when using function expression, ensure you declare them at the top then call or use them at the bottom of the script file.


### 3. Arrow functions
Like function expressions, arrow functions are also not hoisted by the JavaScript engine.

### 4.Scope
**Global scope** -When a variable is accessible anywhere inside a program -- in the body of the program and within functions.

### 5. Parameters vs arguments
##### parameters

```javascript
function sayName(name){ /* here name is the parameter*/
    alert(`My name is ${name}`);
}

```

##### arguments
Arguments come into play when a function is called

```javascript
function sayName(name){
    alert(`My name is ${name}`);
}

sayName(name); /*name is the argument*/


```

### 6.Default Functions Parameters
```javascript
function sayName(name= "Thor"){
    alert(`My name is ${name}`);
}

sayName(); /*If I call the sayName function without passing a parameter,
 the alert message says "My name is Thor"*/
```

