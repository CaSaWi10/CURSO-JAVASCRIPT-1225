async function cargarContenido() {

    cargarElementos();
    cargarTextos();
    
    await cargarCotizaciones(callback);

}

async function cargarCotizaciones(callback) {
    try{
        document.getElementById('imgEspera').style.visibility
        await delay(800);


    }

    
}