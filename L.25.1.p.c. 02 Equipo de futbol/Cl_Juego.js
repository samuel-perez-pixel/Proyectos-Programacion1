export default class Cl_Juego{
    constructor(resultado){
        this._resultado=resultado;
    }
    set resultado (r){this._resultado=+r;}
    get resultado(){return this._resultado;}
}