export class rule_three {
    static simple(type, a, b, c, d) {
        if(type == 'direct') {
            if(a === undefined) {
                a = (b * c) / d;
    
                if(!Number.isInteger(a)) {
                    a = `${b * c}/${d}`;
                    return a;
                }
                
                else {
                    return a;
                }
            }
    
            else if(b === undefined) {
                b = (a * d) / c;
                
                if(!Number.isInteger(b)) {
                    b = `${a * d}/${c}`;
                    return b;
                }
                
                else {
                    return b;
                }
            }
            
            else if(c === undefined) {
                c = (d * a) / b;
    
                if(!Number.isInteger(b)) {
                    b = `${d * a}/${b}`;
                    return c;
                }
                
                else {
                    return c;
                }
            }
    
            else {
                d = (b * c) / a;

                if(!Number.isInteger(b)) {
                    d = `${b * c}/${a}`;
                    return d;
                }
                
                else {
                    return d;
                }
            }
        }

        if(type == 'inverse') {
            if(a === undefined) {
                a = (b * d) / c;

                if(!Number.isInteger(a)) {
                    a = `${b * d}/${c}`;
                    return a;
                }
                
                else {
                    return a;
                }
            }

            else if(b === undefined) {
                var top = a * c;
                var bottom = d;

                b = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(b)) {
                    b = `${top}/${bottom}`;
                    return b;
                }
                
                else {
                    return b;
                }
            }

            else if(c === undefined) {
                var top = b * d;
                var bottom = a;

                c = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(c)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    c = `${top}/${bottom}`;
                    return c;
                }

                return c;
            }

            else {
                var top = a * c;
                var bottom = b;

                d = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(d)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {                            
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }
                            
                            else {
                                if(bober) {
                                    d = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    d = `${top}/${bottom}`;
                                }
                                break;
                            }
                        }
                    }
                }

                return d;
            }
        }
    }

    static compound() {

    }
}