//Se crea la clase egreso que es hija de Dato o una extension de Dato
class Ingresos extends Dato{
    static contadorIngreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++ Ingresos.contadorIngreso;
    }
    get id(){
        return this._id;
    }
}
