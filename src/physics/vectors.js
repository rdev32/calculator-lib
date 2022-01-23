export class vectors {
    static sum(...vectors) {
        var arr_x = [], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(sum)
        var y = arr_y.reduce(sum)

        return [x, y]
    }

    static substract(...vectors) {
        var arr_x = [], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(substract)
        var y = arr_y.reduce(substract)

        return [x, y]
    }

    static product(...vectors) {
        var arr_x =[], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(product)
        var y = arr_y.reduce(product)

        return x + y;
    }

}

const sum = (accumulator, curr) => accumulator + curr;
const substract = (accumulator, curr) => accumulator - curr;
const product = (accumulator, curr) => accumulator * curr;