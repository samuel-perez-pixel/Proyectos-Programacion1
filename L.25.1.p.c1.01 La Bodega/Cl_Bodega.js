export default class{
    constructor(){
        this.acumCos=0;
    }
    procesarArticulo(a){
        // acumular costo
        this.acumCos+=a.costo;
    }
    Ganancia(){
        return this.acumCos*(50/100);
    }
}