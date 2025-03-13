let score = 0
let intro = document.querySelector(".mon-texte")
let prenom = prompt("Bienvenue ! Quel est ton prénom ?")

intro.innerText = `Bienvenue ${prenom}, te voilà dans ce quizz très facile sur l'astronomie.`

let espace = document.createElement("div")
intro.appendChild(espace)
espace.style.marginBottom = "20px"

let next = document.createElement("div")
intro.appendChild(next)

let question1 = document.createElement("div")
intro.appendChild(question1)
question1.innerText=`1. Quelle est la planète la plus grande du système solaire ?`
question1.style.marginBottom = "10px"

let btn1 = document.createElement("button")
btn1.textContent="Mars"
intro.appendChild(btn1)
btn1.classList.add("monBouton")
btn1.style.marginRight = "10px"

btn1.addEventListener("click", ()=>{
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    next.innerText= "Mauvaise réponse !"
})

let btn2 = document.createElement("button")
btn2.textContent="Jupiter"
intro.appendChild(btn2)
btn2.classList.add("monBouton")
btn2.style.marginRight ="10px"

let btn3 = document.createElement("button")
btn3.textContent="Saturne"
intro.appendChild(btn3)
btn3.classList.add("monBouton")


