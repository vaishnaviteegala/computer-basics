
/*
1. datatypes  - number, string, boolean, object

2. variable declaration in javascript:
var, let, const

3. conditional statements

4. functions

5. loops:
 foreach, map, reduce

*/

var someobj = { abc: 'naresh' }

let somearr = [ 'naresh', 'suresh', 'rock', 'suresh', 'aditya' ]


const complexobj = { def: someobj, xyz: somearr }

const abc = 23;

const dist = 'naresh'


if(abc == 23 && dist == 'naresh') {
  // console.log('true')
} else {
  // console.log('false')
}

// functions are two types: conventional/classic, arrow 

//1. conventional/classic
function raghu() {
  // console.log('hello', this);
}

// calling a function
raghu()

// 2. arrow function
const naresh = () => {
  // console.log('world', this);
}

naresh()

// foreach loop


// forEach is used to loop and process data
somearr.forEach((item, idx) => {
  // console.log('ns', item, idx)
})

// map is used to loop and create new array from existing array all elements
const newwww = somearr.map((item, idx) => {
  return item+idx;
})

// console.log(newwww)

// array reduce simple operation
const numArr = [28, 29, 27]
// adding all array elements
const sumNumArr = numArr.reduce((result, item, idx) => {
  result = result + item;
  return result;
},10)
// console.log(sumNumArr)

// multiplying all array elements
const multipleNumArr = numArr.reduce((result, item, idx) => {
  result = result * item;
  return result;
},22)
// console.log(multipleNumArr)

// in single loop calculating addition and multiplication
const addMultipleNumArr = numArr.reduce((result, item, idx) => {
  result.mul = result.mul * item;
  result.sum = result.sum + item;
  return result;
},{ sum:0, mul:1 })

// console.log(addMultipleNumArr)


