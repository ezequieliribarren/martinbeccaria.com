
function sobreMi() {
let botonCardF = document.querySelector(".botonCardF")
let contCardF = document.querySelector(".contCardF")
let botonCardE = document.querySelector(".botonCardE")
let contCardE = document.querySelector(".contCardE")
let botonCardC = document.querySelector(".botonCardC")
let contCardC = document.querySelector(".contCardC")

botonCardF.onclick = () => {
if (botonCardF.innerText === "▼") {

    contCardF.classList.remove("off")       
    contCardF.classList.add ("on")
            
            botonCardF.innerText = "▲"

}

else {
    contCardF.classList.remove("on")
    contCardF.classList.add ("off");
    botonCardF.innerText = "▼"
}
}

botonCardE.onclick = () => {
    if (botonCardE.innerText === "▼") {
    
        contCardE.classList.remove("off")       
        contCardE.classList.add ("on")
                
                botonCardE.innerText = "▲"
    
    }
    
    else {
        contCardE.classList.remove("on")
        contCardE.classList.add ("off");
        botonCardE.innerText = "▼"
    }
    }

    botonCardC.onclick = () => {
        if (botonCardC.innerText === "▼") {

contCardC.classList.remove("off")       
contCardC.classList.add ("on")
        
        botonCardC.innerText = "▲"
        
        }
        
        else {
            contCardC.classList.remove("on")
            contCardC.classList.add ("off");
            botonCardC.innerText = "▼"
        
        }
        }
}
sobreMi()
