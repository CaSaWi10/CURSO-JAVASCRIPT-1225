async function obtenerTodos() {
    try{
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method:'GET',
            header:{
                "Content-Type": "application/json"
            }

            })
            .then(respuesta => respuesta.json())
            .then(data =>{
                let cuerpoTabla = document.getElementById("tblContenido");
                let salida = "";
                for (let elemento of data.dispositivos){
                    salida += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento}</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                    `;
                }

                cuerpoTabla.innerHTML = salida;

            }).catch(error=> {throw new Error('error en la solicitud: ' + error)})
        } catch(error){
        console.error(error);
    }
}


async function consultarUno(){
    try{
        let id = document.getElementById('txtConsulta').value;
        if(id === ''){
            alert("No has ingresado ningun ID");
            return;
        }

        axios.getElementById('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+id)
        .then(respuesta =>{
            let dispositivo = respuesta.data;
            document.getElementById('consultaNombre').value = dispositivo.marca;
            document.getElementById('consultaModelo').value = dispositivo.modelo;
            document.getElementById('consultaColor').value = dispositivo.color;
            document.getElementById('consultaAlmacenamiento').value = dispositivo.almacenamiento;
            document.getElementById('consultaProcesador').value = dispositivo.procesador;
            document.getElementById('consultaNombre').value = dispositivo;

        })
            .catch(error => {throw new Error("Error en la solicitud: "+error)})
    }catch(error){
        console.error(error);
    }
    
}


async function agregarUno() {
    try{
        let marca = document.getElementById("inputMarca").value;
        let modelo = document.getElementById("inputModelo").value;
        let color = document.getElementById("inputMColor").value;
        let almacenamiento = document.getElementById("inputAlmacenamiento").value;
        let procesador = document.getElementById("inputProcesador").value;
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/',{
            method: 'POST',
            header{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento , 
                procesador: procesador
            })

        })
        .then(respuesta => respuesta.json())
        .then(data =>{
            obtenerTodos();
            alert(`se ha agregado un nuevo archivo:/n${data.marca}
                \nModelo: ${data.modelo}
                \nColor: ${data.color}
                \nAlmacenamiento:${data.almacenamiento}
                \nProcesador: n${data.procesador}`)

       })

        } 
        .catch()
    }catch.error(error);
    
}