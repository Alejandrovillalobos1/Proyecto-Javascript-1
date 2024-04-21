//Se crea la clase egreso que es hija de Dato o una extension de Dato
class Egresos extends Dato{
    static contadorEgreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++ Egresos.contadorEgreso;
    }
    get id(){
        return this._id;
    }
}