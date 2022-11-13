
function sobreMi() {

    let select1 = document.querySelector("#select1")
    let select2 = document.querySelector("#select2")
    let select3 = document.querySelector("#select3")
    let despl1 = document.querySelector(".despl1")
    let despl2 = document.querySelector(".despl2")
    let despl3 = document.querySelector(".despl3")
     
    select1.onclick = () => {
    if (select1.innerText == "Formación" && despl1.innerHTML == "") {
            let cont1 = document.createElement("div")
            let tit1 = document.createElement("div")
            let imgTit1 = document.createElement("div")
            let cont2 = document.createElement("div")
            let tit2 = document.createElement("div")
            let imgTit2 = document.createElement("div")

            tit1.innerHTML = `<h3> ISEF N° 1 Enrique Romero Brest </h3>`
            imgTit1.innerHTML = `<img src = ./img/sobreMi/logoIsef alt ="">`
            tit2.innerHTML = `<h3> UNLZ LARD (Licenciatura de alto rendimiento deportivo) </h3>`
            imgTit2.innerHTML = `<img src = ./img/sobreMi/logoUnlz alt ="">`

            cont1.appendChild(imgTit1)
            cont1.appendChild(tit1)
            cont2.appendChild(imgTit2)
            cont2.appendChild(tit2)
            despl1.appendChild(cont1)
            despl1.appendChild(cont2)

            despl2.innerHTML = ""
            despl3.innerHTML = ""
            select1.style.backgroundColor = "#6ab150";

        }
  };



    select2.onclick = () => {
        if (select2.innerText == "Habilidades" && despl2.innerHTML == "") {
                let cont1 = document.createElement("div")
                let tit1 = document.createElement("div")
                let imgTit1 = document.createElement("div")
                let cont2 = document.createElement("div")
                let tit2 = document.createElement("div")
                let imgTit2 = document.createElement("div")
    
                tit1.innerHTML = `<h3> Preparación Física Específica </h3>`
                imgTit1.innerHTML = `<img src = ./img/sobreMi/logoIsef alt ="">`
                tit2.innerHTML = `<h3> Planificación con seguimiento </h3>`
                imgTit2.innerHTML = `<img src = ./img/sobreMi/logoUnlz alt ="">`
    
                cont1.appendChild(imgTit1)
                cont1.appendChild(tit1)
                cont2.appendChild(imgTit2)
                cont2.appendChild(tit2)
                despl2.appendChild(cont1)
                despl2.appendChild(cont2)
    
                despl1.innerHTML = ""
                despl3.innerHTML = ""
                select2.style.backgroundColor = "#6ab150";
            }
         }

        select3.onclick = () => {
            if (select3.innerText == "Experiencia" && despl3.innerHTML == "") {
                    let cont1 = document.createElement("div")
                    let tit1 = document.createElement("div")
                    let imgTit1 = document.createElement("div")
                    let cont2 = document.createElement("div")
                    let tit2 = document.createElement("div")
                    let imgTit2 = document.createElement("div")
        
                    tit1.innerHTML = `<h3> Urquiza tenis Club </h3>`
                    imgTit1.innerHTML = `<img src = ./img/sobreMi/logoIsef alt ="">`
                    tit2.innerHTML = `<h3> Academia de Tenis </h3>`
                    imgTit2.innerHTML = `<img src = ./img/sobreMi/logoUnlz alt ="">`
        
                    cont1.appendChild(imgTit1)
                    cont1.appendChild(tit1)
                    cont2.appendChild(imgTit2)
                    cont2.appendChild(tit2)
                    despl3.appendChild(cont1)
                    despl3.appendChild(cont2)

                    despl1.innerHTML = ""
                    despl2.innerHTML = ""
                    select3.style.backgroundColor = "#6ab150";
                }
            
        
    }

            }

sobreMi();