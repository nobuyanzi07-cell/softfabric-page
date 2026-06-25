# softfabric-page
a mock detergent brand
# JavaScript Variables

It is a named container that stores a piece of information so that a program can use it later.

REAL LIFE EXAMPLE: A jar in a kitchen. You can have a jar with the label "Cereal". That label does not change but what can be stored inside it can be finished or refilled with more cereal. In the same way a variable with particular name stays the exact same but the value it holds can be used or updated as the program runs
  
## Declaring variables in JavaScript

1. **`let`** is used to declare a variable whose value is allowed to change later in the program 
	 ```javascript 
	let age = 20;age = 21; // allowed, because let can be reassigned
	 ```	 
2. **`const`** is used to declare a variable whose value should never be reassigned after it has been set 
	```javascript
	const country = "Kenya";// country = "Uganda"; // this would cause an error, because const cannot be reassigned	
	```
## Rules for naming variables

1. **: Allowed character:**- Variable names can contain letter from a-z, A-Z, single digits numbers, underscores (_) and dollar signs ($)
2. **: Starting with numbers: **- a variable name can't start with a number 
3. **: Space: **- Spaces are not allowed anywhere in the variable name. If one wants to use multiple words, they can join them with camelCase, PascalCase or underscores between the words
4. **: Keywords: ** - JavaScript has reserved words like let, const, function, if, etc. which cannot be used as variable names. `age`, `Age`, `AGE` are treated differently.


### Valid
```javascript 
let firstname; 
let _score; 
let $price; 
```
### Invalid
```javascript
let 1stplace; //cannot start with a number
let full name; //spaces between words are not allowed
let const; //cannot use reserved words
```

## Variable name styles
### Camel case
Camel case starts with a lowercase letter, and every word after the first begins with an uppercase letter, with no spaces or underscores between words. 
```javascript
firstName
student age
```
Used for variable names and function names.

### Pascal Case
Pascal case makes the first word and other words that follow start with uppercase.
```javascript
FirstName
LastName
```

### Snake case
It writes all letters in lowercase and separates words using underscores instead of capital letters.
```javascript
first-name
student_name
```

## Summary
In JavaScript, variables are names we give to storage boxes that hold data for our programs. There are two ways to declare them: **let**, which is used for values that may change; and **const**, which is meant for values that should remain fixed. Naming variables correctly is important because names must follow certain rules—they can’t start with numbers, contain spaces, or use reserved keywords. Developers often follow naming conventions to make code easier to read and maintain. For example, **camelCase** is commonly used for regular variables, **PascalCase** is often used for classes, and **snake_case** appears in some contexts. Together, these practices make code cleaner, more consistent, and easier to understand across a project.

# Variables
## Primitive Variables
JavaScript has 7 primitive data types;
1. **String** - text i.e. `"hello"`
2. **Number** - integers i.e. `42`
3. **Boolean** - `true` and `false`
4. **Undefined** - a variable that has been declared but not assigned a value
5. **Null** - represent the intentional absence of a value
6. **BigInt** - for integers larger than `number` can represent i.e `123n`

```javascript
let a=5;
let b=a
b=10
console.log(a)// 5
console.log(b)//10
```
## Ways to create a string variable
### 1. Double quotes
```javascript
let greet1="hello";
```
### 2. Single quotes
```javascript
let greet2= 'hello'
```
### 3. Backticks
```javascript
let name="Seth";
let greet3=`hello, ${name};` 
```

## Difference Between undefined and null data type
### Undefined 
1. **Meaning**- Variable declared but not assigned a value
2. **Set by** - JS automatically
3. **Type** - `"undefined"`
4. **Common use** - Default state of an uninitialized variable

```javascript
let x;
console.log(x);// undefined as it has been declared but a value has not been assigned
```

### Null
1. **Meaning** - Intentional absent value
2. **Set by** - developer spedific
3. **Type** - `"object"`
4. **Common use** - to clear a value

```javascript
let y = null;
console.log(y)// null - is set to nothing at all
```
`undefined` means this hasn't been given a value and `null` means it has specifically been set to none.
