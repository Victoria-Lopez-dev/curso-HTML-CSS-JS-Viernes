//string-boolean-numbers

//operaciones
//+ - * / -
// comparacion == === !== != < > <= >= -> me devolvia un boolean
//doble igual o el distinto simple (compara solamente valor) y triple igual o el doble desigual (comprarn valor y tipo )

//logicos -> &&(todo cumplirse para dar true ) ||(que algo de todo se cumpla para dar true) ! (da el opuesto) -> anidar operaciones de comparacion  / siempre nos devuelve un boolean

//estructuras

//condicionales

//if| if/else 

let valor=33
if(valor>100){
    console.log("hacemos algo..")
}

if(valor >100){
    console.log("superamos los 100")
}else{
    console.log('No llegamos a superar los 100')
}

//funciones 
//conjunto de instrucciones 

//primero la creo/defino
//2 maneras

//1 tradicional
/* sintaxis:

function nombre(parametros){
 accion/es a realizar
}
*/

function saludar() {
    console.log("hola")
}
function saludar2(nombrePersona) {
    console.log("hola "+ nombrePersona)
}

//2 arrow function - funcion flecha 

/* sintaxis:
   const nombre=(parametros)=>{
    accion/es a realizar
    }
*/

//luego ejecuto/invocar

//nombre() | nombre(argumentos)

//argumento -> valor del parametro
saludar()
saludar2("Marta")

//eventos - DOM 

//DOM Document Object Model 
//el html y la pantalla como un gran objeto 

let taza={
    color:"rojo",
    material:"ceramica",
    cantidad:22,
    plato :true
}

const persona={
    nombre:"Marta",
    edad:33,
    email:"marta@ejemplo.com"
}

//agregar propiedad
//sintaxis -> objeto.nuevaPropiedad = valor;

//modificar valor 
//sintaxis -> objeto.propiedad=nuevoValor;

//eliminar propiedad
//sintaxis -> delete objeto.propiedad

//accerder un valor 
//sintaxis -> objeto.propiedad 

//DOM

//document(accede al HTML) - window (accede a la ventana)

//nodos -> elementos html formato objeto

console.dir(document)
//document -> html
//window -> pantalla del browser

//metodos para poder acceder a los elementos(nodos) del html
//querySelector(selector) -> traer 1 nodo
//querySelectorAll(selector) ->trae una lista con todos los nodos(array)


let parrafo=document.querySelector("p")// 1er <p> que encuentre 
//selector -> etiqueta | #id | .clase | >, + ,~


console.dir(parrafo)

parrafo.innerText="cambio el valor interno...";

console.log(parrafo.id)

let sections= document.querySelectorAll(".seccion")
console.log(sections)


//---------listas - arrays

//[dato,dato,dato] y separan a cada item con una coma simple
// indice -> nro que inicia desde 0 que se asigna a cada item de la lista por orden de posicion 

// acceder a un item de la lista -> array[indice]


function cambiarFondo() {
   
    sections[0].style.backgroundColor="darkblue";
    sections[1].style.backgroundColor="violet"; 
}

//evento -> respuesta/concecuencia ante algunas acciones en el browser
//intervienen:

//1- nodo en el que ocurre el evento 
//2 - evento (accion se ejecuta a la cual estar atento )
// click - change - input - mouseover - blur - focus ...
//3 - funcion en respuesta a ese evento 

//sintaxis

//1 -> metodo nodo.addEventListener(evento,()=>{}) -> JS

let boton =document.querySelector("button");

boton.addEventListener("click",()=>{
    console.log("se pulso el boton")
});

//2 -> atributo - on+evento ="funcion()" (en el elemento del HTML)

