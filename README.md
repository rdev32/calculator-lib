# Npm Ax-Calculator
This is a quick mathematical calculator

> Please be [informed](https://github.com/donatto-minaya/npm-ax-calculator/releases) of every change that is made to this calculator, many more operations are being added that can help you and an example of use is given.

<a href="https://www.npmjs.com/package/ax-calculator">![npm](https://img.shields.io/npm/v/ax-calculator)</a>
<a href="https://www.npmjs.com/package/ax-calculator">![npm](https://img.shields.io/npm/dm/ax-calculator)</a>

### Usage

This calculator can be used in node.js
```
npm i ax-calculator
```

```js
// Currently, you have these different classes that can help you
// BasicOperations Area, Fractions Base, Operations, Percentage, Equations, RuleOfThree
import { Area, BasicOperations } from './node_modules/ax-calculator/src/main.js'
```

### Summary
Each class contains its respective functions, which will return a string or a number depending on the parameters you have specified.

```js
//Sum, substract, product, division, module, raise to, root
BasicOperations.substract(250, 10, 35, ...); // -> 205
BasicOperations.root(1296, 4) // -> 6
BasicOperations.raiseTo(2, 5) // -> 32

Operations.hypotenuse(3, 4) // -> 5
Base.binaryToBase10(100101) // -> 37
Area.circle(2) // -> 4π
Fractions.division(1,6,-5,9) // -> -(3/2)
Base.toBase(20, 3) // -> 202

Equations.secondDegree(2, -3, 3) // Output: { x1: '3/4 + 𝓲√15/4' , x2: '3/4 - 𝓲√15/4'  }
```

All methods will return a value that you can store in a variable for later display.
```js
//Some methods you will need to specify that you need the result, you can set it to negative
var result = BasicOperations.sum(1,2,3)
console.log(result) // Output: { result: 6, toNegative: [Function: toNegative] }
console.log(result.result) // Output: 6
console.log(result.toNegative()) // Output: -6

```
<hr></hr>

Some methods contain REST type parameters

```js
BasicOperations.sum(1, 5) // -> 6
BasicOperations.sum(3,6,2,6,6,1) // -> 24
```

But others require only 2, or even 1 depending on the formula
```js
BasicOperations.division(10, 2) // -> 5
Area.circle(2) // -> 4π / 12.56
```