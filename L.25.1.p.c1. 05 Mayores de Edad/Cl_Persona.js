export default class{
    constructor(n,e,s){
        this._nombre=n;
        this._edad=e;
        this._sexo=s;}
    get nombre(){return this._nombre;}
    get edad(){return this._edad;}
    get sexo(){return this._sexo;}
    set nombre(n){this._nombre=n;}
    set edad(e){this._edad=e;}    
    set sexo(s){this._sexo=s.toUpperCase();}
}