export class basicOperations {
    static sum(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous + current;
        });
    }

    static substract(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous - current;
        });
    }

    static product(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous * current;
        });
    }

    static division(param1, param2) {
        try {
            return param1 / param2
        }

        catch(e) {
            console.log("You cannot divide more than two numbers.")
        }
    }

    static module(param1, param2) {
        try {
            return param1 % param2
        }

        catch(e) {
            console.log("Uses only two numbers.")
        }
    }

    static raiseTo(number, exponent) {
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

    /**
    ʳᵒᵒᵗ√number

    If you do not enter a root, you will get the square root by default.

    @param {number} number The number whose root you need
    @param {number} root The root you wish to obtain
    **/

    static root(number, root = 2) {
        return String(number ** (1/root))
    }
}

