# Npm Ax-Calculator
This is a quick mathematical calculator

<a href="https://www.npmjs.com/package/ax-calculator">![npm](https://img.shields.io/npm/v/ax-calculator)</a>
<a href="https://www.npmjs.com/package/ax-calculator">![npm](https://img.shields.io/npm/dm/ax-calculator)</a>

### Usage

npm
```
npm i ax-calculator
```

HTML
```html
...
<script crossorigin src="https://unpkg.com/ax-calculator@1.1.0/src/main.js"></script>

...
<script type="module" src="index.js"></script>
```

- index.js
```js
// In the dots you will place the class you want to use
import { ... } from './node_modules/ax-calculator/src/main.js'
```

## Classes and their operations
> Please be [informed](https://github.com/donatto-minaya/npm-ax-calculator/releases) of every change that is made to this calculator, many more operations are being added that can help you and an example of use is given.
### Basic Operations
- Sum, substract, product, division, module, root, raise to
```js
BasicOperations.sum(2,5,8,4,11) // { result: 30, toNegative: [Function: toNegative] }
BasicOperations.substract(304, 20, 51) // { result: 233, toNegative: [Function: toNegative] }
BasicOperations.product(35,1,9) // { result: 315, toNegative: [Function: toNegative] }
BasicOperations.division(25,5) // 5.00
BasicOperations.module(40,4) // 10.00
BasicOperations.root(1296, 4) // 6
BasicOperations.raiseTo(3, 5) // 243
```

### Base
- binary to base 10, to base
```js
Base.toBase(20, 4) // -> 110
Base.binaryToBase10(1001) // -> 9
```

### Fractions
- Sum, substract, product, division, simplify
```js
Fractions.sum(1,2,-4,6) // 1/2 + (-4/6)-> -1/6
Fractions.substract(-5,2,4,7) // -5/2 - 4/7 -> -43/14
Fractions.product(10,2,-5,4) // 10/2 * (-5/4) -> -25/4
Fractions.division(5,3,7,2) // (5/3)/(7/2) ->10/21
Fractions.simplify(154, 6) // 77/3
```

### Equations
- Secoond degree
```js
// 2x² - 3x + 3 = 0
Equations.secondDegree(2, -3, 3) // Output: { x1: '3/4 + 𝓲√15/4' , x2: '3/4 - 𝓲√15/4'  }
```

### Percentage
- What percentage is, percentage of, percent from percent, total from percent
```js
// What percentaje is 12 out of 30?
Percentage.whatPercentageIs(12, 30) // 40.00%

// How much is 7% of 39?
Percentage.percentageOf(7, 39) // 2.73

// If 30% is 10, then 60% is...
Percentage.percentFromPercent(30, 10, 60) // 20

// If 10% is 20, the total is...
Percentage.totalFromPercent(10, 20) // 200
```

### Rule of three
- Simple
```js
RuleOfThree.simple("direct", 10, undefined, 60, 90) // Output: 15
```

### Triangles
- Functions return information about triangles
```js
Triangles.angle14_76()

/* Output:
{
  hypotenuse: 'k√17',
  opposite: 'k',
  adjacent: '4k',
  sin: 'k/k√17',
  cos: '4k/k√17',
  tan: 'k/4k'
}
*/
```

### Linear Regression
- Simple
```js
var array_x = [100, 90, 80, 45, 50, 50, 60, 40, 25, 20];
var array_y = [3, 5, 9, 10, 20, 21, 24, 24, 27, 35];

console.log(LinearRegression.simple(array_x, array_y));

//Output:
/*
{
  a: -0.34788,
  b: 37.28128,
  equation: '-0.34788x + 37.28128',
  coefficient: [Function: coefficient]
}
*/
```

### Area
- Triangle, rectangle, circle, square, square2, trapeze
```js
// ...
Area.triangle(4, 3) // 6
Area.circle(5) // 25π
// ...
```

### Operations
- Hypotenuse, to romanized, log, factorial, double factorial, combinatorial, fibonacci
```js
Operations.hypotenuse(7, 9) // -> √11.40
Operations.toRomanized(420); // CDXX

// log5x = 4
Operations.log(5, null, 4) // 625

// 4!
Operations.factorial(4); // 26

// 10!!
Operations.doubleFactorial(10); // 3840
Operations.combinatorial(7, 3); // 35

Operations.fibonacci(5)

/*
Output:

[
    0,  1,  1,  2,  3,  5,
    8, 13, 21, 34, 55, 89,
    144
]
*/
```