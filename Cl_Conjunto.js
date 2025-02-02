export default class{
    constructor(){
        this._edad=0;
        this._cntPersonas=0;
    }
    procesarPersona(persona){
        this._edad+=persona.edad;
        this._cntPersonas++;
    }
    edadPromedio(){
        return this._edad/this._cntPersonas;
}
}