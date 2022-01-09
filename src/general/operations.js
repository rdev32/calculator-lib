export class operations {
    /**
    Returns the square root of the product of 
    the sum of the squared sides of the triangle.
    **/
    static hypotenuse(param1, param2) {
        var result = Math.sqrt((param1 * param1) + (param2 * param2));

        if(Number.isInteger(result)) {
            return String(result);
        }

        else {
            return "√" + String(result.toFixed(2));
        }
    }

    /**
    Convert a number to Roman numerals
    @param {number} num The number you are going to convert
    **/
    static toRomanized(num) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }

        var result = '';
        
        for (var key in roman) {
            if (num == roman[key]) {
                return result +=key;
            }

            var bober = num > roman[key];

            if(bober) {
                result = result + key.repeat(parseInt(num/roman[key]));
                num = num % roman[key];
            }
        }

        return result;
    }

    /**
    - You have a simple log like log(b)a = c
    
    @param {number} base The base of the log -> b
    @param {number} argument The result of bᶜ -> a
    @param {number} logarithm Also known as exponent -> c
    @return {string} Return the missing value in the log, 
    set null to the value you need to find
    **/
    static log(base, argument, logarithm) {
        if(base == null) {
            return String(Math.pow(argument, 1/logarithm));
        }

        else if(argument == null) {
            return String(base ** logarithm);
        }

        else {
            for(var i = 2; i < 13; i++) {
                if(base ** i == argument) {
                    return String(i);
                }

                else {
                    continue;
                }
            }
        }
    }
}