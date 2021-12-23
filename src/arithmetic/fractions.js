export class fractions {
    static sum(numerator1, denominator1, numerator2, denominator2) {
        var result;

        if(denominator1 == denominator2) {
            // When dominators are equals
            var top = numerator1 + numerator2
            var bottom = denominator1
            
            if((top / bottom) % 1 == 0) {
                result = String(top / bottom)
            }
            
            else {
                result = String(top) + "/" + String(bottom);
            }
        }

        else {
            // When dominators are different
            var top = (denominator2 * numerator1) + (denominator1 * numerator2)
            var bottom = denominator1 * denominator2
            
            if((top / bottom) % 1 == 0) {
                result = String(top / bottom)
            }

            else {
                for(let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }
    
                        else{
                            result = String(top) + "/" + String(bottom)
                            break;
                        }
    
                        result = String(top) + "/" + String(bottom)
                    }
                }

            }
        }

        return result;
    }
}