import { PI } from '../constants/constants.js';

export class area {
    static triangle(base, height) {
        return (base * height) / 2
    }

    static rectangle(width, height) {
        return width * height
    }

    static circle(radio) {
        return PI * (radio * radio)
    }

    static square(side) {
        try {
            return side * side
        }

        catch {
            console.log("ES: Un cuadrado tiene todos los lados iguales, esta función requiere un solo parámetro.")
            console.log("EN: A square has all sides equal, this function requires only one parameter.")
        }
    }

    static trapeze(bottom, top, height) {
        return ((bottom + top) / 2) * height
    }
}