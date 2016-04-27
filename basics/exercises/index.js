const num = 42

let str
console.log('type of str is', typeof str)
str = 'foo'
console.log('Now type of str is', typeof str)

// different equations

let a = 42
let b = '42'

console.log(a == b)   // true
console.log(a === b)  // false

console.log(false == '')
console.log(null == undefined) // ?
console.log(null === undefined) // ?

// basic operations

console.log('Add number and string', num + str)  // '42foo'

// if types of operands are different or operatortion isn't defined
// interpreter will apply it to toString results
num.toString() // '42'
str.toString() // 'foo'


let baz = 'something'
const iamObject = {
  baz,  // shortcuy for baz: 'something'
  foo: 'bar',
  'complicated-name': 'foo',
}

const iamArray = [1, 2, 3, 'foo']

// desctructing

const { foo } = iamObject
console.log(foo)  // 'bar'

const iamArray = [1, 5, 3, 42, 56]

const [first, second, ...rest] = aimArray

// ---------
// functions
// ---------

function sum(a, b) {
  return a + b
}
sum(1, 2)


// this approach preferable for fat-arrow functions
const mult = function(a, b) {
  return a * b
}

// fat-arrow functions
const div = (a, b) => a / b

const pow = (a, b) => {
  console.log(a)
  console.log(b)
  return a ** b
}

// function with default parameters
function repeat(str, count = 2) {
  const array = new Array(count)
  return array.fill(str).join('')
}

// named parameters passes as object

function join({ items, separator }) {
  return items.join(separator)
}

join({items: [1, 2, 3], separator: ':'})

// ----------
// conditions, loops
// ----------

const a = 42
const b = 'other'

// works for every value of something except null, undefined, '' and 0
let empty = null
if (empty) console.log('full')

if (!empty) console.log('empty')

if (a !== b) {
  let result = "you're lier!"
  console.log(result)
}
console('there is no result', result)


let i
for (i = 0; i < 10, i++) {
  console.log(i)
}

for (let a of [1, 2, 3]) {
  console.log(a)
}

// -----------
// closures
// -----------

function outer() {
  const outerVar = 42
  // innerVar is unknow here. We can't access to it here
  return function inner() {
    console.log(outerVar) // it's available in inner scope
    const innerVar = 1
    return outerVar + innerVar

  }
}


function getGenerator() {
  let value = 0
  return function() {
    value = value + 1
    return value
  }
}
