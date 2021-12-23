export class base {
    static toBase(number, base) {
        if(typeof(number) == 'string' || typeof(base) == 'string') {
            return "This method does not accept strings";
        }

        else {
            return number.toString(base)
        }
    }

    static binaryToBase10(number) {        
        if(!isNaN(number)) {
            var binary = number.toString().replace(/[^01]/gi, '')
            return Number.parseInt(binary, 2).toString()
        }

        else {
            return "You must place a binary number";
        }

    }
}