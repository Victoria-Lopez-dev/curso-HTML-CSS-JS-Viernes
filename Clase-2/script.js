//traer el nodo video

let video=document.querySelectorAll('video')[1];
console.dir(video)

//video - audio -> muted booleano para mutear o no .

//duration -> tiempo en segundos 

//currenTime -> tiempo actual del video en segundos

//generalizamos el transformar el tiempo
const transformarTiempo=(tiempo)=>{
    if(tiempo<60){
       return "00:"+tiempo.toFixed(0)
   }else{
       //ejemplo: 1 minuto y medio -> 90min -> 01:30
       let minutos=tiempo/60;
       //let minutos = 90/60 -> 1.5 -> 1
       let segundos= tiempo - minutos*60
       //let segundos= 90 - 1*60 = 90-60 =30

       return minutos+":"+ segundos
   }
}


const mostrar=()=>{
    let parrafoDuracion=document.querySelector("#duracion")
    
    let estructuraTiempo=transformarTiempo(video.duration)//traerme un string con el tiempo 
         parrafoDuracion.innerText=estructuraTiempo
       
}


// teniendo en cuenta 1 min - 60seg | 1seg - 60mseg
//regla de 3 simple Xseg *1min/60seg

//toFixed() -> ajustar un numero decimal a cuantos decimales le coloquemos dentro
//parseInt() -> transforma a un entero de lo que coloquemos dentro 


//---metodos video/audio
//play() - pause()
let intervalo;//variable vacia

function mostrarTiempoActual() {
    let parrafoActual=document.querySelector("#actual");
        parrafoActual.innerText=transformarTiempo(video.currentTime)
        console.log("ejecutando el setInterval")
}
const reproducir=()=>{
    video.play();
   
    intervalo=setInterval(mostrarTiempoActual,1000) //la variable ya tiene el intervalo y lo ejecuto

    //otra manera
    //intervalo=setInterval(()=> {
//     let parrafoActual=document.querySelector("#actual");
//     parrafoActual.innerText=transformarTiempo(video.currentTime)
//     console.log("ejecutando el setInterval")
// },1000)
};

function pausar() {
    video.pause()//pause el video 
   //clearInterval(mostrarTiempoActual)//no me pausa el intervalo
   clearInterval(intervalo)

}

//metodo propio de JS -> setInterval() - clearInterval()
//setInterval(()=>{},ms) //ejecutar una funcion cada cierto tiempo (ms) 
//setTimeout(()=>{},ms) // ejeturar una funcion una vez despues de un delay establecido (ms)
// clearInterval() -> pausa la funcion ejecutada en el intervalo
//clearInterval(setInterval)


