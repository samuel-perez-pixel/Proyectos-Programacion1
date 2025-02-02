/*3. EDAD PERSONAS 
3. Conociendo la edad de varias personas, indicar la edad promedio. 
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17 */

import Cl_Persona from "./Cl_Persona.js";
import Cl_Conjunto from "./Cl_Conjunto.js";

// OBJETOS PERSONAS
let per1=new Cl_Persona(15);
let per2= new Cl_Persona(14);  
let per3= new Cl_Persona(19);
let per4= new Cl_Persona(20);
let per5= new Cl_Persona(16);
let per6= new Cl_Persona(18);    

// OBJETO CONJUNTO
let con= new Cl_Conjunto();

// PROCESAR LAS PERSONAS        
con.procesarPersona(per1);
con.procesarPersona(per2);                      
con.procesarPersona(per3);
con.procesarPersona(per4);    
con.procesarPersona(per5);    
con.procesarPersona(per6);    

let salida=document.getElementById('Salida');
salida.innerHTML=`
<br> LA EDAD PROMEDIO ES ${con.edadPromedio()}
`