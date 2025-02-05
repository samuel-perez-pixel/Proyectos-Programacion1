export default class{
    constructor(){
        this._cntPersonas=0;
        this._cntHombres=0;
        this._cntMujeres=0;
    }
    procesarPersona(persona){
        this._cntPersonas++;
        if(persona.sexo=='M'){
            this._cntHombres++;
        }else{
            this._cntMujeres++;
        }
    }
    cantidadPersonas(){return this._cntPersonas;}
    cantidadHombres(){return this._cntHombres;}
    cantidadMujeres(){return this._cntMujeres;}
}