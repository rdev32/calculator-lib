export class fractions {
    static sum(numerator1, denominator1, numerator2, denominator2) {
        var result;

        var bober = false;        

        if(denominator1 == denominator2) {
            // When dominators are equals
            var top = numerator1 + numerator2
            var bottom = denominator1
            
            //Check if negative
            if(top < 0) {
                bober  = true;
                top = top * -1;
            }
            
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

            //Check if negative
            if(top < 0) {
                bober  = true;
                top = top * -1;
            }
            
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
                            if(bober) {
                                result = "-" + String(top) + "/" + String(bottom)
                            }

                            else {
                                result = String(top) + "/" + String(bottom)
                            }
                            
                            break;
                        }
                    }
                }

            }
        }

        return result;
    }

    static substract(numerator1, denominator1, numerator2, denominator2) {
        var result;

        if(denominator1 == denominator2) {
            // When dominators are equals
            var top = numerator1 - numerator2
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
            var top = (denominator2 * numerator1) - (denominator1 * numerator2)
            var bottom = denominator1 * denominator2
            
            var bober = false;
            
            //Check if negative
            if(top < 0) {
                bober  = true;
                top = top * -1;
            }
            
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
                            if(bober) {
                                result = "-" + String(top) + "/" + String(bottom)
                            }

                            else {
                                result = String(top) + "/" + String(bottom)
                            }

                            break;
                        }
                    }
                }

            }
        }

        return result;
    }

    static product(numerator1, denominator1, numerator2, denominator2) {
        var top = numerator1 * numerator2;
        var bottom = denominator1 * denominator2;
        var result;

        var bober = false;

        //Check if negative
        if(top < 0) {
            bober  = true;
            top = top * -1;
        }

        for(let i = 2; i < 13; i++) {
            while((top / i > 0) && ((bottom / i) > 0)) {
                if((top % i == 0) && ((bottom % i) == 0)) {
                    top = top / i;
                    bottom = bottom / i;
                }

                else{
                    if((top / bottom) % 1 == 0) {
                        result = String(top / bottom)
                    }

                    else {
                        if(bober) {
                            result = "-" + String(top) + "/" + String(bottom)
                        }
                        
                        else {
                            result = String(top) + "/" + String(bottom)
                        }
                    }
                    break;
                    
                }
            }
        }

        return result;
    }

    static division(numerator1, denominator1, numerator2, denominator2) {
        var top = numerator1 * denominator2;
        var bottom = denominator1 * numerator2;
        var result;

        var bober = false;

        //Check if negative
        if(top < 0) {
            bober  = true;
            top = top * -1;
        }

        if(bottom < 0) {
            bober  = true;
            bottom = bottom * -1;
        }

        for(let i = 2; i < 13; i++) {
            while((top / i > 0) && ((bottom / i) > 0)) {
                if((top % i == 0) && ((bottom % i) == 0)) {
                    top = top / i;
                    bottom = bottom / i;
                }

                else{
                    if(bober) {
                        result = "-" + String(top) + "/" + String(bottom)
                    }
                        
                    else {
                        result = String(top) + "/" + String(bottom)
                    }
                    break;
                    
                }
            }
        }

        return result;
    }
}