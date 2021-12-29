# Npm Ax-Calculator `BETA`
This is a quick mathematical calculator

### Why `beta`?
Not much has happened since the creation of this package, although the tested exercises return a result, some of them may return an undefined result. <br><br>
`More formulas will be added to the calculator, in the meantime we will explain how to use what it contains.`

```js
import {Area, BasicOperations} from './node_modules/ax-calculator/src/main.js'
```

### Summary
You have all the basic operations

```js
//Sum, substract, product, division, module, raise to, root
BasicOperations.sum(1,5,3, ...); // -> 9
BasicOperations.substract(250, 10, 35, ...); // -> 205
BasicOperations.root(1296, 4) // -> 6
BasicOperations.raiseTo(2, 5) // -> 32
```

You can also perform other operations according to your needs.
```js
Operations.hypotenuse(3, 4) // -> 5
Base.binaryToBase10(100101) // -> 37
Area.circle(2) // -> 4π
Fractions.division(1,6,-5,9) // -> -(3/2)
Base.toBase(20, 3) // -> 202
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