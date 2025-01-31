//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
let dato="aca guardando un dato...."
//----------------------


//Web Storage -> API que nos permite almacenar informacion no sensible en el browser

//localStorage -> almacenar informacion y borrarla cuando se lo indiquemos

//sessionStorage -> al terminar una sesion se borra.


//metodos : setItem(key,value) - getItem(key)- removeItem(key)
//siempre almacena tipo de dato string 
//si setteo varias veces datos con la misma key ,esta se sobreescribe 

localStorage.setItem("22asdjkh","Juan");
sessionStorage.setItem("dato",dato);

console.log(localStorage.getItem("22djkh")) // en caso que no se encuentre valor con dicha key devuelve null 
let resultado=sessionStorage.getItem("dato");

//alert(resultado)

localStorage.removeItem("22asdjkh");
//clear() elimina todos los datos almacenados en localStorage o sessionStorage

let producto={
    nombre:"silla",
    precio:10000,
    marca:"pepito",
    descuento:false
}
//---------------------------
let infoTema=localStorage.getItem("tema");

if(infoTema =="noche"){
    document.querySelector("body").classList.add("fondo");

}

const temaNoche=()=>{
    document.querySelector("body").classList.add("fondo");

    localStorage.setItem("tema","noche")
}

const temaDia=()=>{
    document.querySelector("body").classList.remove("fondo");

    localStorage.setItem("tema","dia")
}


//---------------------------
let contador;
let listaPrevia=[];

let cantidad=localStorage.getItem("cantidad");

if(cantidad == null){
    contador=0
}else{
    contador=cantidad
}
document.querySelector("#cantidad").textContent=contador;



const sumarAChango=()=>{
    contador++
    document.querySelector("#cantidad").textContent=contador;
    localStorage.setItem("cantidad",contador);
   
    listaPrevia.push(producto);
    console.log(listaPrevia)
    localStorage.setItem("listaProductos",JSON.stringify(listaPrevia));

};

const borrarCompra=()=>{
    localStorage.removeItem("cantidad");
    contador=0
    document.querySelector("#cantidad").textContent=0
}


//transformar a formato de texto -> JSON (JS Object Notation)

//muy util para enviar y recibir informacion.
//JSON -> objeto JS -> dos metodos : parse() - stringify()

let ejemplo=[{
    nombre:'dato',
    dato2:3
}];

let dataJSON=JSON.stringify(ejemplo);//transforma a JSON lo colocado entre los parentesis -> array - objeto a JSON

console.log(ejemplo)
console.log(dataJSON)

console.log(JSON.parse(dataJSON))// transforma de JSON a objeto-array