let intro = document.querySelector(".mon-texte")
let prenom = prompt("Bienvenue ! Quel est ton prénom ?")

intro.innerText = `Bienvenue ${prenom}, te voilà dans ce quizz très facile sur l'astronomie.`

let espace = document.createElement("div")
intro.appendChild(espace)
espace.style.marginBottom = "20px"

let question1 = document.createElement("div")
intro.appendChild(question1)
question1.innerText=`1. Quelle est la planète la plus grande du système solaire ?`

let btn1 = document.createElement("button")
btn1.textContent="Mars"
intro.appendChild(btn1)
btn1.classList.add("monBouton")
btn1.style.marginRight = "10px"

let btn2 = document.createElement("button")
btn2.textContent="Jupiter"
intro.appendChild(btn2)
btn2.classList.add("monBouton")


