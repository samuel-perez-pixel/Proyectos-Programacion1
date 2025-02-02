export default class{
    constructor(costo){
    this.costo=costo;
    }
    set costo (c){this._costo=+c;}
    get costo(){return this._costo;}
    }