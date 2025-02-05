export default class{
    constructor(){
        this.cntPersonas=0;
        this.cntMayores=0;
    }
   procesarPersona(per){
        this.cntPersonas++;
        if(per.edad>=18){
            this.cntMayores++;
        }
    }
    totalPersonas(){
        return this.cntPersonas;
    }
    totalMayores(){
        return this.cntMayores;
    }
    porcentajeMayores(){
        return (this.cntMayores/this.cntPersonas)*100;
    }
    
}