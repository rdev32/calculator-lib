# Npm Ax-Calculator `BETA`
This is a quick mathematical calculator

```js
import {Area, BasicOperations} from './node_modules/ax-calculator/src/main.js'
```

`More formulas will be added to the calculator, in the meantime we will explain how to use what it contains.`

### Sample
From basic operations...

```js
BasicOperations.sum(1,5,3, ...); // -> 9
BasicOperations.substract(250, 10, 35, ...); // -> 205
Fractions.sum(1, 2, -4, 6); // 1/2 + (-4/6) -> 1/6
Area.triangle(2, 4); // -> 4
```

To more complex future operations
```js
Operations.hypotenuse(3, 4) // -> 5
Vectors.substract((-3,4), (5, -2)) // (-8,6)
```

All methods will return a value that you can store in a variable for later display.
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