/*1. LA BODEGA 
En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%... 
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos. 
Ej. Costos varios artículos: 10, 20, 14, 6 y 4 
La salida requerida presenta el siguiente formato: 
La ganancia será de Bs.27 */

import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Bodega from "./Cl_Bodega.js";
// OBJETOS ARTICULOS
let art1=new Cl_Articulo(10);
let art2= new Cl_Articulo(20);
let art3= new Cl_Articulo(14);
let art4= new Cl_Articulo(6);
let art5= new Cl_Articulo(4);

// Objeto bodega
let bod= new Cl_Bodega();

// PROCESAR LOS ARTICULOS
bod.procesarArticulo(art1);
bod.procesarArticulo(art2);
bod.procesarArticulo(art3);
bod.procesarArticulo(art4);
bod.procesarArticulo(art5);

let salida=document.getElementById('Salida');
salida.innerHTML=`
<br> LA BODEGA HA GANADO Bs.${bod.Ganancia()}
`