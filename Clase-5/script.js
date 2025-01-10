//addEventListener...

// const mostrar=()=>{
//     console.dir(window.scrollY)   
    
//     if(window.scrollY >1000){
//         document.querySelector("nav").style.backgroundColor="red"
//     }else{
//         document.querySelector("nav").style.backgroundColor="transparent"

//     }
// }

//alternativa tomando como referencia el alto de pantalla
const mostrar=()=>{
    console.dir(window.scrollY)   // px que se traslada verticalmente
    console.dir(window.innerHeight)// alto de pantalla
    
    if(window.innerHeight*0.5 <window.scrollY){
        document.querySelector("nav").classList.add("fondo")
    }else{
        document.querySelector("nav").classList.remove("fondo")

    }
}
