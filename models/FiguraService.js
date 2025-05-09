class FiguraService {
    calcularAreaCirculo(radio = 0) {
        let resultado = Math.PI * Math.pow(radio, 2)
        return resultado.toFixed(2)
    }

    calcularAreaRectangulo(base = 0, altura = 0) {
        let resultado = base * altura
        return resultado
    }
    
    calcularAreaTrinagulo(base = 0, altura = 0) {
        let resultado = (base * altura) / 2
        return resultado
    }
}

export default FiguraService