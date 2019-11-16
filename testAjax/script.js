function cargarPeliculas(){
    document.getElementById('resultados').innerHTML = "";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
            let jackson = JSON.parse(xhttp.responseText);
            Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                let row = jackson[key];
                console.log(row.nombre);

                document.getElementById('resultados').innerHTML += `<h2> ${row.Pelicula} - ${row.anio}
                 - ${row.nombreActor} ${row.apellidoActor} - "${row.papel}"</h2>`;
               
            });


            
        }
    }


    let url = new URL('http://127.0.0.1:3000/request');  //armo la url, esta tes la base
    url.searchParams.set('peli',document.getElementById('inputPeli').value); //sigo armando la url de busqueda

    console.log(url);
    xhttp.open("GET",url,true);
    xhttp.withCredentials=true;
    xhttp.send();

   
    
}