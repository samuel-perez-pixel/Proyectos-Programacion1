/*2. FÚTBOL 
Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1 
la salida requerida presenta el siguiente formato:Ganaste el 66.67% de los juegos  */
import Cl_Equipo from "./Cl_Equipo.js";
import Cl_Juego from "./Cl_Juego.js";

// OBJETOS JUEGOS
let jue1=new Cl_Juego(1);
let jue2= new Cl_Juego(1);  
let jue3= new Cl_Juego(0);
let jue4= new Cl_Juego(1);
let jue5= new Cl_Juego(0);
let jue6= new Cl_Juego(1);
let jue7= new Cl_Juego(1);

// Objeto equipo
let equ= new Cl_Equipo();

// PROCESAR LOS JUEGOS
equ.procesarJuego(jue1);
equ.procesarJuego(jue2);
equ.procesarJuego(jue3);
equ.procesarJuego(jue4);    
equ.procesarJuego(jue5);    
equ.procesarJuego(jue6);    
equ.procesarJuego(jue7);

let salida=document.getElementById('Salida');
salida.innerHTML=`
<br> TU EQUIPO HA GANADO ${equ.porcentajeGanados()}% DE LOS JUEGOS
`