import { szamos } from "./fuggvenyek.js";

const szamokELEM = document.getElementsByClassName("szamok")[0]
szamokELEM.innerHTML += szamos()

const gombokLISTA = document.querySelectorAll(".szamok button")

for (let index = 0; index < gombokLISTA.length; index++) {
    gombokLISTA[index].addEventListener("click", beIras)    
}



function beIras(event){
    console.log(event.target)
    const kifejezesELEM = document.querySelector(".kifejezes")
    kifejezesELEM.innerHTML += event.target.innerHTML
}