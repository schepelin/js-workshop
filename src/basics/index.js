const num = 42

let str
console.log('typo of str is', typeof str)
str = 'foo'
console.log('Now typo of str is', typeof str)

let a = 42
let b = '42'

console.log(a == b)   // true
console.log(a === b)  // false

console.log(false == '')
console.log(null == undefined) // ?
console.log(null === undefined) // ?


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

const { foo } = iamObject
console.log(foo)  // 'bar'

const iamArray = [1, 5, 3, 42, 56]

const [first, second, ...rest] = aimArray

// ---------
// functions
// ---------

function sum(a, b) {
    return a = b
}
sum(1, 2)

const mult = function(a, b) {
    return a * b
}

const div = (a, b) => a / b

const pow = (a, b) => {
    console.log(a)
    console.log(b)
    return a ** b
}


// ----------
// conditions, loops and scoupes
// ----------

const a = 42
const b = 'other'

if (a !== b) {
    let result = "you're lier!"
    console.log(result)
}
console('there is no result', result)
