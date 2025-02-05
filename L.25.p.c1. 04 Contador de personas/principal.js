/*4. CONTADOR DE PERSONAS 
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato: 
Cantidad de personas: 12 
Cantidad de hombres: 5 
Cantidad de mujeres: 7 */

import Cl_Persona from "./Cl_Persona.js";
import Cl_Grupo from "./Cl_Grupo.js";

// OBJETOS PERSONAS 
let per1=new Cl_Persona('Luisa','F');
let per2= new Cl_Persona('Ana','F');  
let per3= new Cl_Persona('José','M');
let per4= new Cl_Persona('Carmen','F');    
let per5= new Cl_Persona('Rosa','F');
let per6= new Cl_Persona('José','M');    
let per7= new Cl_Persona('María','F');    
let per8= new Cl_Persona('Luz','F');    
let per9= new Cl_Persona('Rafael','M');    
let per10= new Cl_Persona('Liz','F');    
let per11= new Cl_Persona('Marcos','M');    
let per12= new Cl_Persona('Leo','M');    

// OBJETO GRUPO
let grp= new Cl_Grupo();

// PROCESAR LAS PERSONAS
grp.procesarPersona(per1);    
grp.procesarPersona(per2);                  
grp.procesarPersona(per3);    
grp.procesarPersona(per4);    
grp.procesarPersona(per5);    
grp.procesarPersona(per6);    
grp.procesarPersona(per7);    
grp.procesarPersona(per8);    
grp.procesarPersona(per9);    
grp.procesarPersona(per10);    
grp.procesarPersona(per11);    
grp.procesarPersona(per12); 

alert(`Cantidad de personas: ${grp.cantidadPersonas()}`);
alert(`Cantidad de hombres: ${grp.cantidadHombres()}`);
alert(`Cantidad de mujeres: ${grp.cantidadMujeres()}`);

let salida=document.getElementById('Salida');
salida.innerHTML=`
<br> Cantidad de personas: ${grp.cantidadPersonas()}
<br> Cantidad de hombres: ${grp.cantidadHombres()}
<br> Cantidad de mujeres: ${grp.cantidadMujeres()}
`;  