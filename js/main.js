let score = 0
let intro = document.querySelector(".mon-texte")
let prenom = prompt("Bienvenue ! Quel est ton prénom ?")

intro.innerText = `Bienvenue ${prenom}, te voilà dans ce quizz très facile sur l'astronomie.`

let espace = document.createElement("div")
intro.appendChild(espace)
espace.style.marginBottom = "20px"

// espace contenant les questions et les boutons
let containerSuivant = document.createElement("div")
containerSuivant.style.marginTop = "20px"
intro.appendChild(containerSuivant)

// question 2 + boutons
let question2 = document.createElement("div")
containerSuivant.appendChild(question2)
question2.style.marginBottom = "10px"
question2.style.display= "none"
question2.innerText=`2. Question 2`

// Question 1 + boutons 
let question1 = document.createElement("div")
containerSuivant.appendChild(question1)
question1.innerText=`1. Quelle est la planète la plus grande du système solaire ?`
question1.style.marginBottom = "10px"


let btn1 = document.createElement("button")
btn1.textContent="Mars"
containerSuivant.appendChild(btn1)
btn1.classList.add("monBouton")
btn1.style.marginRight = "10px"

btn1.addEventListener("click", ()=>{
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    question2.style.display="block"
})

let btn2 = document.createElement("button")
btn2.textContent="Jupiter"
containerSuivant.appendChild(btn2)
btn2.classList.add("monBouton")
btn2.style.marginRight ="10px"

btn2.addEventListener("click", ()=>{
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    score += 1
    question2.style.display="block"
})

let btn3 = document.createElement("button")
btn3.textContent="Saturne"
containerSuivant.appendChild(btn3)
btn3.classList.add("monBouton")

btn3.addEventListener("click", ()=>{
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    question2.style.display="block"
})






