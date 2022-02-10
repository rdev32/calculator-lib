import { fractions } from '../arithmetic/fractions.js';

var pi = "π";

export class angle_measurements {
    static radian() {
        return {
            toCentesimal(number) {

            },

            toSexagesimal() {

            }
        }
    }

    static centesimal(number) {
        return {
            toRadian() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    
                    var dest = destructure(fractions.simplify(number, 200));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${pi}` : t = `${top}${pi}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toSexagesimal() {
                
            }
        }

    }

    static sexagesimal(number) {
        return {
            toRadian() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    var dest = destructure(fractions.simplify(number, 180));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${pi}` : t = `${top}${pi}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toCentesimal() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    var top = 10 * number, bottom = 9;

                    //Numero entero
                    if ((top / bottom) % 1 == 0) {
                        return top / bottom;
                    }

                    //Decimal
                    else {
                        return `${top}/${bottom}`
                    }
                }
            }
        }
    }
}

function destructure(string) {
    let array = string.split('/');
    var top =  array[0], bottom = array[1];
    return {
        top, bottom
    }
}