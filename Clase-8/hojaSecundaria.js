let cantidad=localStorage.getItem("cantidad");
let lista=document.querySelector("ul");
lista.innerHTML=`<li>${cantidad}</li>`;

let listaPreviaJSON=localStorage.getItem("listaProductos");//lo obtengo en formato JSON
// console.log(JSON.parse(listaPrevia));

let listaPrevia=JSON.parse(listaPreviaJSON);

for(let item of listaPrevia){
    let li= document.createElement("li");
    li.textContent=`${item.nombre} $ ${ item.precio}`;
    lista.appendChild(li)
}