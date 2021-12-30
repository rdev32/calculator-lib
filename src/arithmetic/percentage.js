export class percentage {
    /**
    What percentage is?... (wpi)

    Example: What percentaje is 12 out of 30?
    @description Calculates the percentage of the total according to the value you give it
    @param {number} number 12
    @param {number} total 30
    **/
    static wpi(number, total) {
        var result = (number * 100) / total;
        return String(result.toFixed(2)) + "%";
    }

    /**
    Percentage Of.. (pof)
    
    Example: How much is 7% of 39?
    @description Calculates the percentage of a number or quantity.
    @param {number} percentage 7%
    @param {number} total 39
    **/

    static pof(percentage, total) {
        var result = (percentage * total) / 100;
        return String(result)
    }

    /**
    Example: If 30% is 10, then 60% is...
    @description Calculates a percentage from another percentage.
    @param {number} percentage1 30%
    @param {number} value1 10
    @param {number} percentage2 60
    **/

    static percentFromPercent(percentage1, value1, percentage2) {
        var result = (value1 * percentage2) / percentage1;

        if(Number.isInteger(result)) {
            return String(result);
        }

        else {
            return String(result.toFixed(2));
        }
    }


}