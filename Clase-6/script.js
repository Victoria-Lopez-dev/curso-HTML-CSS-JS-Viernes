//API -> Aplication programing interfase 
//  conector entre el front y el servidor ?

//funciones hacer mas simple situaciones complejas 

//obtener informacion y poder utilizarla en nuestro sitio.

//API - externas : Giphy - YoutubeDataAPI - Formspree ...

//API - incluidas al codigo HTML5 : Canvas - Geolocalizacion - Drag &Drop ...


//Canvas - API grafica 

// figuras primitivas ->  trazos y rectangulos 

let canvas= document.querySelector("canvas");

let lienzo=canvas.getContext("2d");

//rectangulos
//fillRect(x,y,width,height)->rectangulos con relleno
//strokeRect() -> rectangulos con contorno
//clearRect() -> rectangulo que "tapa"/oculta lo que tenga debajo

console.dir(lienzo)
lienzo.fillRect(100,50,40,50)
lienzo.fillStyle="rgb(200,33,55)";//definir el color de relleno 
lienzo.fillRect(100,10,40,10);


lienzo.strokeStyle="blue"; //color de contorno
lienzo.lineWidth=4;
lienzo.strokeRect(50,80,100,20)

lienzo.clearRect(105,60,60,10);


//-----------------------

//trazos
//beginPath()-> inicio de trazo |  closePath() - fill() : para indicar el fin del trazo
//stroke() -> metodo donde dibuja el contorno de lo trazado
//fill() -> metodo donde colorea el relleno del trazo - no necesito utilizar closePath() en el fin del trazo
//moveTo(x,y) - lineTo(x,y)

lienzo.strokeStyle="#F90"
lienzo.lineWidth=7;

lienzo.beginPath();
lienzo.moveTo(200,30);
lienzo.lineTo(0,0);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle="green"
lienzo.moveTo(0,0);
lienzo.lineTo(100,100);
lienzo.stroke();
lienzo.closePath();


// arc(x,y,r,ang.inicio,ang.final,direccion)
//arcTo(x1,y1,x2,y2,r)

//angulos -> radianes
//metodo -> Math.PI/180 * grados -> angulo en radianes




let angulo50=Math.PI / 180 * 50;
lienzo.lineWidth=4;
lienzo.strokeStyle="#333333"
lienzo.beginPath();
lienzo.moveTo(220,50);
lienzo.arc(100,70,80,angulo50,Math.PI*2,false);
lienzo.stroke();
lienzo.closePath();

//quadraticCurveTo(px,py,x,y) -> punto de control
//bezierCurveTo(p1x,py1,px2,py2,x,y)
lienzo.lineWidth=2;
lienzo.strokeStyle="red";

lienzo.beginPath();
lienzo.moveTo(270,10);
lienzo.quadraticCurveTo(300,80,270,60);
lienzo.quadraticCurveTo(100,10,270,90);
lienzo.stroke();
lienzo.closePath();

lienzo.strokeStyle="#5533AA";
lienzo.beginPath();
lienzo.moveTo(270,95);
lienzo.bezierCurveTo(220,50,260,200,200,95)
lienzo.stroke();
lienzo.fill()
lienzo.closePath();

//texto 

//fillText(texto,x,y) -strokeText(texto,x,y)
//font -> px tipografia

lienzo.clearRect(50,10,200,200);

lienzo.lineWidth=1;
lienzo.fillStyle="#33AA88"

lienzo.beginPath();
lienzo.moveTo(100,30);
lienzo.font="20px Arial"
lienzo.strokeText("HOLA!!!",100,30);
lienzo.fillText("Chau!!!",100,50);
lienzo.stroke();

lienzo.closePath();

let mover;
let xA=100
let xB=30;
let palabra=()=>{
   
    mover= setInterval(()=>{
      
        xB++
        lienzo.clearRect(50,10,200,200);
        lienzo.beginPath();
        lienzo.strokeText("HOLA!!!",100,xB);
        lienzo.stroke();
        lienzo.closePath();
         
    },100)
    
}
let parar=()=>{
    clearInterval(mover)
}

//crear una gradiente
//lineales -> createLinearGradient(x1,y1,x2,y2) 
//radial ->createRadialGradient(x1,y1,r1,x2,y2,r2) 

//agregar colores -> addColorStop(posicion,color);

let gradiente=lienzo.createLinearGradient(100,10,200,50) ;
gradiente.addColorStop(0.6,"red");
gradiente.addColorStop(0.1,"blue");

//la incorporamos en el trazado

lienzo.fillStyle=gradiente
lienzo.beginPath();
lienzo.fillRect(105,55,50,40)
lienzo.fillText("Chau!!!",100,50);
lienzo.fill();
lienzo.stroke();