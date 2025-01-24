//API -> Aplication Programing Interfase
//API -> Formspree - Giphy- Youtube DataAPI .. asincronia (fetch - promesas) para poder "llamarlas" y utilizarlas en nuestro codigo
//API -HTML5 : Canvas - Geolocalizacion - Drag&Drop - Web Storage 

//------ Geolocalizacion API permitir conocer la ubicacion (aprox) del dispositivo en donde se abra el sitio, conocer la ubicacion del usuario 
const funcionOk=(position)=>{
    console.log(position);//objeto de ubicacion, la info la tenemos dentro de coords y timestap es el tiempo que tardo en conseguirlo.
    
    console.log("te ubicamos!!!")
    let texto=document.querySelector("p");
    texto.textContent=`Su ubicacion aproximada es en la latitud ${position.coords.latitude} y longitud ${position.coords.longitude} con un error de ${position.coords.accuracy} metros`
};
const funcionError=(error)=>{
    console.log(error);

    if(error.code ==1){
        let texto=document.querySelector("p");
        texto.textContent="Estimado usuario necesitamos que nos depermiso para su ubicacion..."
    }
    if(error.code ==2){
        console.log("No pudimos ubicarlo =(")
    }
    if(error.code ==3){
        alert("No tuvimos suficiente tiempo")
    }
};
const objetoConfiguracion={
    enableHighAccuracy:true,//tratar de ser lo mas exacto posible (ojo utilizar mucho recurso)
    timeout:300,//tiempo limite de busqueda 
   // maximumAge:2000 tiempo maximo de espera entre c/solicitud
};

navigator.geolocation.getCurrentPosition(funcionOk,funcionError,objetoConfiguracion)
//getCurrentPosition() -> la posicion actual del usuario
//watchPosition()-> la posicion actual del usuario pero lo repite cada un cierto tiempo
//clearWatch();

//error -> 1 - usuario denego la ubicacion
//2-no pudo ubicar
//3 - tiempo insuficiente