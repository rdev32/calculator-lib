export class operations {
    static hipotenuse(param1, param2) {
        var result = Math.sqrt((param1 * param1) + (param2 * param2));

        if(Number.isInteger(result)) {
            return String(result);
        }

        else {
            return "√" + String(result.toFixed(2));
        }
    }

    /**
    You have a simple log like log(b)a = c
    
    @param {number} base The base of the log -> b
    @param {number} logarithm Also known as exponent -> c
    @param {number} argument The result of bᶜ
    @return {string} Return the missing value in the log, 
    set null to the value you need to find

    **/

    static log(base = 2, argument, logarithm) {
        if(base == null) {
            return String(Math.pow(argument, 1/logarithm));
        }

        else if(argument == null) {
            return String(base ** argument);
        }

        else {
            
        }

    }
}