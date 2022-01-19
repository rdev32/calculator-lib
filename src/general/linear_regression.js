export class linear_regression {
    static simple(array_x, array_y) {
        // Verificar que ambos sean arreglos
        if((typeof array_x == 'object') && (typeof array_y == 'object')) {
            //Si son arreglos, ver que tengan la misma cantidad de datos
            if(array_x.length == array_y.length) {
                var array_x2 = [], array_xy = [];

                // x ** 2
                array_x.forEach(e => array_x2.push(e ** 2))

                // xy
                for(var i = 0; i < array_x.length; i++) {
                    array_xy.push(array_x[i] * array_y[i])
                }

                // Sumatorias
                var sum_y = array_y.reduce(sum)
                var sum_x = array_x.reduce(sum)
                var sum_x2 = array_x2.reduce(sum);
                var sum_xy = array_xy.reduce(sum);
                
                //Longitud
                var length = array_y.length

                // Inicia la formula
                var a, b, equation;

                a = Number.parseFloat((((length * sum_xy) - (sum_x * sum_y) ) / ( (length * sum_x2) - (sum_x ** 2))).toString().match(/^-?\d+(?:\.\d{0,5})?/)[0]);
                
                b = (sum_y - (a * sum_x)) / length;
                

                //Ecuacion lineal
                equation = `${a}x + ${b}`

                return {
                    a, b, equation
                }
            }

            else {
                return "The arrays must have the same amount of data";
            }
        }

        else {
            return "The function requires objects"
        }
    }
}

const sum = (accumulator, curr) => accumulator + curr;