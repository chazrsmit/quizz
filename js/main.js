let score = 0

//update à chaque fois le score, car sans la fonction ça ne marche pas - à chaque bonne réponse, la fonction est appelée et updatée ;
//sinon update à chaque fois qu'on clique sur le bouton : scoreText.innerText = `Score = ${score}`
function updateScoreDisplay() {
    // let scoreText = document.querySelector(".texte-score")
    scoreText.innerText = `Score = ${score}`
    // scoreText.style.display = "block" // Make sure it's visible
}

let intro = document.querySelector(".mon-texte")
let prenom = prompt("Bienvenue ! Quel est ton prénom ?")

let texteIntro = document.createElement("div")
intro.appendChild(texteIntro)
texteIntro.innerText = `Bienvenue ${prenom}, te voilà dans ce quizz trèèèès facile sur l'astronomie. Commençons...`

let espace = document.createElement("div")
intro.appendChild(espace)
espace.style.marginBottom = "30px"

let boutonStart = document.createElement("bouton")
intro.appendChild(boutonStart)
boutonStart.classList.add("monBouton2")
boutonStart.textContent="Let's go !"
boutonStart.addEventListener("click", ()=>{
    texteIntro.remove()
    espace.remove()
    boutonStart.remove()
    question1.style.display="block"
    btn1.style.display="inline-block"
    btn2.style.display="inline-block"
    btn3.style.display="inline-block"
})

// espace contenant les questions et les boutons
let containerSuivant = document.createElement("div")
// containerSuivant.style.marginTop = "20px"
intro.appendChild(containerSuivant)

// Question 1 + boutons 
let question1 = document.createElement("div")
containerSuivant.appendChild(question1)
question1.innerText=`1. Quelle est la planète la plus grande du système solaire ?`
question1.style.marginBottom = "30px"
question1.style.display = "none"

let btn1 = document.createElement("button")
btn1.textContent="Mars"
containerSuivant.appendChild(btn1)
btn1.classList.add("monBouton")
btn1.style.marginRight = "10px"
btn1.style.display = "none"

btn1.addEventListener("click", ()=>{
    // texteIntro.remove()
    // espace.remove()
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    question2.style.display="block"
    btn1q2.style.display="inline-block"
    btn2q2.style.display="inline-block"
    btn3q2.style.display="inline-block"
})

let btn2 = document.createElement("button")
btn2.textContent="Jupiter"
containerSuivant.appendChild(btn2)
btn2.classList.add("monBouton")
btn2.style.marginRight ="10px"
btn2.style.display = "none"

btn2.addEventListener("click", ()=>{
    // texteIntro.remove()
    // espace.remove()
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    score += 1
    updateScoreDisplay()
    question2.style.display="block"
    btn1q2.style.display="inline-block"
    btn2q2.style.display="inline-block"
    btn3q2.style.display="inline-block"
})

let btn3 = document.createElement("button")
btn3.textContent="Saturne"
containerSuivant.appendChild(btn3)
btn3.classList.add("monBouton")
btn3.style.display = "none"

btn3.addEventListener("click", ()=>{
    // texteIntro.remove()
    // espace.remove()
    question1.remove()
    btn1.remove()
    btn2.remove()
    btn3.remove()
    question2.style.display="block"
    btn1q2.style.display="inline-block"
    btn2q2.style.display="inline-block"
    btn3q2.style.display="inline-block"
})


// question 2 + boutons
let question2 = document.createElement("div")
containerSuivant.appendChild(question2)
question2.style.marginBottom = "30px"
question2.style.display= "none"
question2.innerText=`2. Quelle est la durée d'une année sur Mercure en jours terrestres ?`

let btn1q2 = document.createElement("button")
btn1q2.textContent="88 jours"
containerSuivant.appendChild(btn1q2)
btn1q2.classList.add("monBouton")
btn1q2.style.marginRight = "10px"
btn1q2.style.display= "none"

btn1q2.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question2.remove()
    btn1q2.remove()
    btn2q2.remove()
    btn3q2.remove()
    question3.style.display="block"
    btn1q3.style.display="inline-block"
    btn2q3.style.display="inline-block"
    btn3q3.style.display="inline-block"
})

let btn2q2 = document.createElement("button")
btn2q2.textContent="225 jours"
containerSuivant.appendChild(btn2q2)
btn2q2.classList.add("monBouton")
btn2q2.style.marginRight ="10px"
btn2q2.style.display= "none"

btn2q2.addEventListener("click", ()=>{
    question2.remove()
    btn1q2.remove()
    btn2q2.remove()
    btn3q2.remove()
    question3.style.display="block"
    btn1q3.style.display="inline-block"
    btn2q3.style.display="inline-block"
    btn3q3.style.display="inline-block"
})

let btn3q2 = document.createElement("button")
btn3q2.textContent="365 jours"
containerSuivant.appendChild(btn3q2)
btn3q2.classList.add("monBouton")
btn3q2.style.display= "none"

btn3q2.addEventListener("click", ()=>{
    question2.remove()
    btn1q2.remove()
    btn2q2.remove()
    btn3q2.remove()
    question3.style.display="block"
    btn1q3.style.display="inline-block"
    btn2q3.style.display="inline-block"
    btn3q3.style.display="inline-block"
})

//Question 3
let question3 = document.createElement("div")
containerSuivant.appendChild(question3)
question3.style.marginBottom = "30px"
question3.style.display= "none"
question3.innerText=`3. Quel est le nom de la galaxie où se trouve notre système solaire ?`

//bouton 1 question 3
let btn1q3 = document.createElement("button")
btn1q3.textContent="Andromède"
containerSuivant.appendChild(btn1q3)
btn1q3.classList.add("monBouton")
btn1q3.style.marginRight = "10px"
btn1q3.style.display= "none"

btn1q3.addEventListener("click", ()=>{
    question3.remove()
    btn1q3.remove()
    btn2q3.remove()
    btn3q3.remove()
    question4.style.display="block"
})

//bouton 2 question 3
let btn2q3 = document.createElement("button")
btn2q3.textContent="Voie lactée"
containerSuivant.appendChild(btn2q3)
btn2q3.classList.add("monBouton")
btn2q3.style.marginRight ="10px"
btn2q3.style.display= "none"

btn2q3.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question3.remove()
    btn1q3.remove()
    btn2q3.remove()
    btn3q3.remove()
    question4.style.display="block"
})

//bouton3 question 3
let btn3q3 = document.createElement("button")
btn3q3.textContent="Orion"
containerSuivant.appendChild(btn3q3)
btn3q3.classList.add("monBouton")
btn3q3.style.display= "none"

btn3q3.addEventListener("click", ()=>{
    question3.remove()
    btn1q3.remove()
    btn2q3.remove()
    btn3q3.remove()
    question4.style.display="block"
})


//Question 4
let question4 = document.createElement("div")
containerSuivant.appendChild(question4)
question4.style.marginBottom = "30px"
question4.style.display= "none"
question4.innerText=`4. Quelle étoile est la plus proche de la Terre après le Soleil ?`

//bouton 1 question 4
let btn1q4 = document.createElement("button")
btn1q4.textContent="Sirius"
containerSuivant.appendChild(btn1q4)
btn1q4.classList.add("monBouton")
btn1q4.style.marginRight = "10px"
btn1q4.style.display= "none"

btn1q4.addEventListener("click", ()=>{
    question4.remove()
    btn1q4.remove()
    btn2q4.remove()
    btn3q4.remove()
    // question5.style.display="block"
})

//bouton 2 question 4
let btn2q4 = document.createElement("button")
btn2q4.textContent="Proxima du Centaure"
containerSuivant.appendChild(btn2q4)
btn2q4.classList.add("monBouton")
btn2q4.style.marginRight ="10px"
btn2q4.style.display= "none"

btn2q4.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question4.remove()
    btn1q4.remove()
    btn2q4.remove()
    btn3q4.remove()
    // question5.style.display="block"
})

//bouton3 question 4
let btn3q4 = document.createElement("button")
btn3q4.textContent="Véga"
containerSuivant.appendChild(btn3q4)
btn3q4.classList.add("monBouton")
btn3q4.style.display= "none"

btn3q4.addEventListener("click", ()=>{
    question4.remove()
    btn1q4.remove()
    btn2q4.remove()
    btn3q4.remove()
    // question5.style.display="block"
})


// score > on le fait apparaitre initialement
let scoreText = document.querySelector(".texte-score")
scoreText.innerText = `Score = ${score}`