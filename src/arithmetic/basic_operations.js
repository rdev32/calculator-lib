export class basicOperations {
    /**
    Returns the sum of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static sum(...parameters) {        
        var result = parameters.reduce((previous, current) => {
            return  previous + current
        });

        return {
            result,
            toNegative() {
                return result * -1;
            }
        }
    }

    /**
    Returns the substract of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static substract(...parameters) {
        var result =  parameters.reduce((previous, current) => {
            return previous - current;
        });

        return {
            result,
            toNegative() {
                return result * -1;
            }
        }
    }

    /**
    Returns the product of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static product(...parameters) {
        var result = parameters.reduce((previous, current) => {
            return previous * current;
        });

        return {
            result,
            toNegative() {
                return result * -1;
            }
        }
    }

    /**
    Returns the division by 2 numbers
    **/
    static division(param1, param2) {
        return (param1 / param2).toFixed(2)
    }

    /**
    Returns the remainder of a division by 2 numbers
    **/
    static module(param1, param2) {
        return (param1 / param2).toFixed(2)
    }

    static raiseTo(number, exponent) {
        if(typeof number === 'string' || typeof exponent === 'string') {
            return "You must enter a number"
        }

        else {
            if(exponent == 0) {
                return "1"
            }
    
            else if(exponent < 0) {
                return `1/${number ** (exponent * -1)}`
            }
    
            else {
                return (number ** exponent).toString();
            }
        }
    }

    /**
    ʳᵒᵒᵗ√number

    If you do not enter a root, you will get the square root by default.

    @param {number} number The number whose root you need
    @param {number} root The root you wish to obtain
    **/

    static root(number, root = 2) {
        if(typeof number === 'string' || typeof root === 'string') {
            return "You must enter a number"
        }

        else {
            return String(number ** (1/root))
        }
    }

    /**
    - Return the factorial of a number

    @param {number} number 
    **/

    static factorial(number) {
        return factorial(number, 1);
    }

    static doubleFactorial(number) {
        return factorial(number, 2);
    }

    /**
    - Example -> C¹¹₇
    - Returns the number of possible combinations

    @param {number} top - 11
    @param {number} bottom - 7
    **/
    static combinatorial(top, bottom) {
        if(typeof top === 'string' || typeof bottom === 'string') {
            return "You must enter a number"
        }

        else {
            return factorial(top) / (factorial(top - bottom) * factorial(bottom))
        }
    }
}

function factorial(number, decrease) {
    var result;

    if(typeof number === 'string') {
        return "You must enter a number"
    }

    else if(number < 0) {
        return "For now, it only receives positive numbers"
    }

    else {
        if(number === 0 || number === 1) {
            result = 1;
        }

        else if(number === 2 && decrease === 2) {
            result = 2;
        }

        else {
            for(var i = number - decrease; i >= 1; i-=decrease) {
                result = (number *= i)
            }
        }

        return result;
    }
}

