import FiguraService from "../models/FiguraService.js";

class FiguraController {

    figuraService = null

    constructor() {
        this.figuraService = new FiguraService()

        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras = this.calcularAreaFiguras.bind(this);
    }

    formularioCalcularArea(request, response) {
        response.render('area')
    }

    calcularAreaFiguras(request, response) {
     
        const { figura, base, altura, radio } = request.body;
        let resultado;

        if (figura === 'rectangulo') {
           resultado = this.figuraService.calcularAreaRectangulo(base, altura)
        } else if (figura === 'triangulo') {
            resultado = this.figuraService.calcularAreaTrinagulo(base, altura)
        } else if (figura === 'circulo') {
            resultado = this.figuraService.calcularAreaRectangulo(calcularAreaCirculo)
        }

        response.render('area', { resultado });
    }

}
export default FiguraController