//arrastrar elementos 
//elementos -> atributo : draggable (permite o no que un elemento sea arrastrable).Valor booleano(true - arrastrable | false : no se puede arrastrar)
//ancla(<a><a/>) - imagenes( <img/>) - arrastrables por defecto
//DOM o por medio de la etiqueta

let h2=document.querySelector("h2")
h2.draggable=true;

 //objeto -> dataTransfer manipular datos del elemento 
 //tipo -> "Text" - "URL"-"text/plain" - "text/html" -"text/uri-list"
 //setData(tipo,dato) ->formato string 
 //getData(tipo)
 //clearData()

//eventos que se aplican en el elemento a arrastrar
//dragstart -> cuando se inicie un arraste
document.querySelector("h1").addEventListener("dragstart",(event)=>{
    console.log("dragstar ejecutado")
    let h1Texto=event.target.textContent;//contenido de texto "Drag and Drop"
    
 event.dataTransfer.setData('Text',h1Texto)//almacenar info

})
// dragend
document.querySelector("h1").addEventListener("dragend",(event)=>{
    //objeto -> DataTransfer 
    console.log(event)
    console.log("se solto el elemento arrastrado")
  let info=event.dataTransfer.getData('Text');//obtener info
    console.log(info)  
    let zonaDestino=document.querySelector(".zona-destino")
    // zonaDestino.innerHTML=`<h1>${info}</h1>`
    zonaDestino.innerHTML=`<h1>${info}</h1>`
})

//drag -> evento que se ejecuta siempre que se este arrastrando un elemento 
const eventoDrag=()=>{
    console.log("se esta ejecutando el evento drag")

}

//eventos que se aplican en la "zona destino"
// dragenter   

const eventoDragEnter=()=>{
    console.log("hay un elemento arrastrable posicionado por encima del elemento")
}
//dragleave
const eventoDragLeave=()=>{
    console.log("hay un elemento que se encuentra siendo arrastrado sale  del elemento actual")
}

//dragover -> cuando se suelta un elemento arrastrado sobre la zona destino + se encuentra siendo arrastrado dentro de la zona destino. 
const eventoDragOver=(e)=>{
     e.preventDefault();// metodo para no accionar de manera predeterminada
    console.log("dargover ejecutado")
}
//drop-> evento que se ejecuta cuando soltamos a un elemento arrastrado sobre otro
// const eventoDrop=()=>{
//     console.log("el elemento se solto dentro");
//     let zonaDestino=document.querySelector(".zona-destino")

//     zonaDestino.innerHTML='<img src="./imagenes/cohete.jpg"/>'
// }

//eventos minimos para que funcione el arrastre - dragstart - dragover(preventDefalt)  - drop 

const eventoDrop=(e)=>{
    console.log(e.dataTransfer.files[0]);
    let infoDoc=e.dataTransfer.files[0]
    let zonaDestino=document.querySelector(".zona-destino")
    if(infoDoc.type == "application/pdf"){
    zonaDestino.innerHTML=`<p>${infoDoc.name}</p><img src="./imagenes/img-pdf.png"/>`        
    }


}

//proxima clase JSON + webStorage