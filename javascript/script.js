
function sobreMi() {
let botonCardF = document.querySelector(".botonCardF")
let contCardF = document.querySelector(".contCardF")
let botonCardE = document.querySelector(".botonCardE")
let contCardE = document.querySelector(".contCardE")
let botonCardC = document.querySelector(".botonCardC")
let contCardC = document.querySelector(".contCardC")

botonCardF.onclick = () => {
if (botonCardF.innerText === "▼") {

contCardF.innerHTML = `<p> Soy Profesor de Educación Física recibido en el ISEF número 1 Romero Brest. Licenciado en Alto Rendimiento Deportivo en la Universidad de Lomas de Zamora (UNLZ)
Cuento con una amplia formación en cursos relacionados a la Ciencia del Ejercicio, con aval internacional y nacional, algunos de ellos especislizados en preparacion física avanzada, fisiología deportiva, bioquímica, nutrición y suplementos.
 </p>`;


botonCardF.innerText = "▲"

}

else {
    contCardF.innerHTML = "";
    botonCardF.innerText = "▼"

}
}

botonCardE.onclick = () => {
    if (botonCardE.innerText === "▼") {
    
    contCardE.innerHTML = `<p> Soy Profesor de Educación Física recibido en el ISEF número 1 Romero Brest. Licenciado en Alto Rendimiento Deportivo en la Universidad de Lomas de Zamora (UNLZ)
    Cuento con una amplia formación en cursos relacionados a la Ciencia del Ejercicio, con aval internacional y nacional, algunos de ellos especislizados en preparacion física avanzada, fisiología deportiva, bioquímica, nutrición y suplementos.
     </p>`;
    
    
    botonCardE.innerText = "▲"
    
    }
    
    else {
        contCardE.innerHTML = "";
        botonCardE.innerText = "▼"
    
    }
    }

    botonCardC.onclick = () => {
        if (botonCardC.innerText === "▼") {
        
        contCardC.innerHTML = `<p> Soy Profesor de Educación Física recibido en el ISEF número 1 Romero Brest. Licenciado en Alto Rendimiento Deportivo en la Universidad de Lomas de Zamora (UNLZ)
        Cuento con una amplia formación en cursos relacionados a la Ciencia del Ejercicio, con aval internacional y nacional, algunos de ellos especislizados en preparacion física avanzada, fisiología deportiva, bioquímica, nutrición y suplementos.
         </p>`;
        
        
        botonCardC.innerText = "▲"
        
        }
        
        else {
            contCardC.innerHTML = "";
            botonCardC.innerText = "▼"
        
        }
        }
}
sobreMi()
