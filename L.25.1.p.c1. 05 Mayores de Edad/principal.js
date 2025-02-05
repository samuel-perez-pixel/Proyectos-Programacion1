/*5. MAYORES DE EDAD 
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
reporte al final el porcentaje de personas que son mayores de edad. 
 GUÍA DE EJERCICIOS DE PROGRAMACIÓN I (3154) Y PROGRAMACIÓN (C4) - CORTE 1 
Pág. 2 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida 
presenta el siguiente formato: 
Cantidad de personas: 12 
Cantidad de personas mayor de edad: 7 
Porcentaje de personas mayor de edad: 58.33% */

import Cl_Persona from "./Cl_Persona.js";
import Cl_Conjunto from "./Cl_Conjunto.js";

// OBJETOS PERSONAS 
let per1=new Cl_Persona('Luis',15,);
let per2= new Cl_Persona('Ana',19);  
let per3= new Cl_Persona('José',21);
let per4= new Cl_Persona('Carmen',17);    
let per5= new Cl_Persona('Rosa',18);
let per6= new Cl_Persona('José',22);    
let per7= new Cl_Persona('María',17);    
let per8= new Cl_Persona('Luz',19);    
let per9= new Cl_Persona('Rafael',23);    
let per10= new Cl_Persona('Liz',15);    
let per11= new Cl_Persona('Marcos',20);    
let per12= new Cl_Persona('Leo',16);    

// OBJETO GRUPO
let conj= new Cl_Conjunto();    

// PROCESAR LAS PERSONAS
conj.procesarPersona(per1);
conj.procesarPersona(per2);                      
conj.procesarPersona(per3);
conj.procesarPersona(per4);    
conj.procesarPersona(per5);    
conj.procesarPersona(per6);    
conj.procesarPersona(per7);    
conj.procesarPersona(per8);    
conj.procesarPersona(per9);    
conj.procesarPersona(per10);    
conj.procesarPersona(per11);    
conj.procesarPersona(per12);    
alert(`Cantidad de personas: ${conj.totalPersonas()}`);
alert(`Cantidad de personas mayores de edad: ${conj.totalMayores()}`);
alert(`Porcentaje de personas mayores de edad: ${conj.porcentajeMayores()}%`);  

let salida=document.getElementById('Salida');
salida.innerHTML=`
<br> Cantidad de personas: ${conj.totalPersonas()}
<br> Cantidad de personas mayores de edad: ${conj.totalMayores()}
<br> Porcentaje de personas mayores de edad: ${conj.porcentajeMayores()}%
`;  