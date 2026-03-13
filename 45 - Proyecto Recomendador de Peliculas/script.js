function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
 
    switch(genero){
        case 'drama':
          if (edad <13){
            recomendacion.textContent = "Casa Blanca";
            } else if (edad<16) {
             recomendacion.textContent = "The Shawshank Redemption";
            }else{
             recomendacion.textContent = "Taxi Driver";
            }
            break;

        case 'comedia':
             if (edad <13){
            recomendacion.textContent = "Back to the Future";
            } else if (edad<16) {
             recomendacion.textContent = "The Truman show";    
            }else{
             recomendacion.textContent = "The Wolf of Wall Streat";
            }
            break;



        case 'musical':
             if (edad <13){
            recomendacion.textContent = "Fantasma de la Opera"
            } else if (edad<16) {
             recomendacion.textContent = "The Miserables"       
            }else{
             recomendacion.textContent = "The Rocky Horror Picture show"       
            }
            break;



        case 'crimen':
             if (edad <13){
            recomendacion.textContent = "Sexto sentido"
            } else if (edad<16) {
             recomendacion.textContent = "Disturbia"       
            }else{
             recomendacion.textContent = "Traffic"       
            }
            break;
            
    }

}