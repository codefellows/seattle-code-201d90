# Class 03 Lecture notes

## Arrays

- Data Type // Data Structure **special type of object**
- A collection or a list of elements
  - can be mixed - I can store strings, booleans, numbers, other arrays

```js
// * Anatomy of an array
//              0     1    2      3
let array = ['hello', 4, true, [1,2,3]];
let myString = array[0]; // -> myString = 'hello'
```

- Don't have to determine the size of the array
- Every element has a position in the array - referred to as it's index
  - Zero based index

- Array have built in methods!
  - `.push()` - allows us to add elements to our array at the end
  - `.pop()` - remove the last element in the array

- Array property
  - `.length` - this going to tell how many elements live in my array

## Loops

### For

- Great for looping/iterating and doing something for a certain number of times
- Great for looping through arrays! (arrays have a length)

```javascript
// anatomy of an for loop
for(starting value; condition; increment){
  do something until that condition is no longer true;
}
```

### While

- Doing something until a condition is no longer true
- Beware of infinite loops!

```javascript
// anatomy of a while loop
while(condition){
  run until that condition is no longer true
}
```
