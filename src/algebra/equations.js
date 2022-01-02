export class equations {

    /**
    Example to Formula1: x² + 7x + 6 = 0
     
    Example to Formula2: 3x² - 27 = 0
    @description The parameters vary according to the formula
    @param {number} a - For formula 1 -> 1, For formula 2 -> 3
    @param {number} b - For formula 1 -> 7, For formula 2 -> -27
    @param {number} c - For formula 1 -> 6, Do not place anything
    **/

    static secondDegree(a, b, c) {
        if(typeof(c) == 'undefined') {
            var x = Math.sqrt((b * -1) / a);
            return x;
        }

        else {    
            var x1 = (((-1 * b) + Math.sqrt((b*b) - (4 * a * c))) / (2 * a)).toFixed(2)
            var x2 = (((-1 * b) - Math.sqrt((b*b) - (4 * a * c))) / (2 * a)).toFixed(2)

            if(x1 < 1) {
                var top = ((-1 * b) + Math.sqrt((b*b) - (4 * a * c)));
                var bottom = 2 * a;

                for(let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if(x1 < 0) {
                                x1 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x1 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }  
            }

            if(x2 < 1) {
                var top = ((-1 * b) - Math.sqrt((b*b) - (4 * a * c)));
                var bottom = 2 * a;

                for(let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if(top < 0) {
                                x2 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x2 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }                
            }
            
            return {
                x1,
                x2
            }
        }
    }

    // static thirdDegree(a, b, c, d) {

    // }
}