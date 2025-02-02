export default class{
    constructor(edad){
        this._edad=edad;
    }
    get edad(){return this._edad;}
    set edad(edad){this._edad=edad;}    
}