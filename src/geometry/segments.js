export class segments {

    /**
        @param parameters Here you will place the measures between 2 points, you can place as many as you want. 
        @returns {string} Returns the full measure of the segment
    **/
   
    static sum(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous + current;
        });
    }
}