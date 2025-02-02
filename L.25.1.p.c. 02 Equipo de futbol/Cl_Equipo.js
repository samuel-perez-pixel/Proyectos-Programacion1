export default class Cl_Equipo{
constructor(){
    this.juegosGanados=0;
    this.juegosPerdidos=0;}

procesarJuego(juego){
    if(juego.resultado== 1){
        this.juegosGanados++;
    }else{
        this.juegosPerdidos++;
    }
}
porcentajeGanados(){
    return (this.juegosGanados*100)/(this.juegosGanados+this.juegosPerdidos);}
}