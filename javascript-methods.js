/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let copy = [];
  for (let i = 0; i < this.length; index++){
    copy.push(callbackFn(this[i], i, this));
  }
  return resultArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let copy = [];
  for (let i = 0, i < this.length; i++){
    if(callbackFn(this[i], i, this)){
      copy.push(this[i]);
    }
  }
  return copy;
};

// SOME //
/*
function returns a bool(t/f) if there exists at least 
one element that meets the requirements
*/
Array.prototype.mySome = function(callbackFn) {
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i], i, this)){
      return true;
    }
  }
  return false;
  
};
// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length; i++){
    if(!callbackFn(this[i], i, this)){
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum += callbackFn(this[i], i, this);
  }
  return sum;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++){
    if(searchElement === this[i])
      return true;
  };
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length ; i++){
    if (this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length -1; i >= 0 ; i--){
    if (this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// KEYS //
/*
returns an array whose elements are strings corresponding 
to the enumerable properties found directly upon object. 
*/
Object.myKeys = function(object) {
  /*
  we will create an array that goes through the object, pushes 
  each key to the array, then sort the array in order.
  */
  let copy = [];

  for(let key in object){
    copy.push(key);
  }
  copy.sort();
  return copy;
};
// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};