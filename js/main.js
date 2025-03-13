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
espace.style.marginBottom = "40px"

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

//////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////
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
    btn1q4.style.display="inline-block"
    btn2q4.style.display="inline-block"
    btn3q4.style.display="inline-block"
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
    btn1q4.style.display="inline-block"
    btn2q4.style.display="inline-block"
    btn3q4.style.display="inline-block"
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
    btn1q4.style.display="inline-block"
    btn2q4.style.display="inline-block"
    btn3q4.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////
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
    question5.style.display="block"
    btn1q5.style.display="inline-block"
    btn2q5.style.display="inline-block"
    btn3q5.style.display="inline-block"
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
    question5.style.display="block"
    btn1q5.style.display="inline-block"
    btn2q5.style.display="inline-block"
    btn3q5.style.display="inline-block"
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
    question5.style.display="block"
    btn1q5.style.display="inline-block"
    btn2q5.style.display="inline-block"
    btn3q5.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////
//Question 5
let question5 = document.createElement("div")
containerSuivant.appendChild(question5)
question5.style.marginBottom = "30px"
question5.style.display= "none"
question5.innerText=`5. Quel est le principal gaz constituant l’atmosphère de Vénus ?`

//bouton 1 question 5
let btn1q5 = document.createElement("button")
btn1q5.textContent="Oxygène"
containerSuivant.appendChild(btn1q5)
btn1q5.classList.add("monBouton")
btn1q5.style.marginRight = "10px"
btn1q5.style.display= "none"

btn1q5.addEventListener("click", ()=>{
    question5.remove()
    btn1q5.remove()
    btn2q5.remove()
    btn3q5.remove()
    question6.style.display="block"
    btn1q6.style.display="inline-block"
    btn2q6.style.display="inline-block"
    btn3q6.style.display="inline-block"
})

//bouton 2 question 5
let btn2q5 = document.createElement("button")
btn2q5.textContent="Dyoxide de carbone"
containerSuivant.appendChild(btn2q5)
btn2q5.classList.add("monBouton")
btn2q5.style.marginRight ="10px"
btn2q5.style.display= "none"

btn2q5.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question5.remove()
    btn1q5.remove()
    btn2q5.remove()
    btn3q5.remove()
    question6.style.display="block"
    btn1q6.style.display="inline-block"
    btn2q6.style.display="inline-block"
    btn3q6.style.display="inline-block"

})

//bouton3 question 5
let btn3q5 = document.createElement("button")
btn3q5.textContent="Azote"
containerSuivant.appendChild(btn3q5)
btn3q5.classList.add("monBouton")
btn3q5.style.display= "none"

btn3q5.addEventListener("click", ()=>{
    question5.remove()
    btn1q5.remove()
    btn2q5.remove()
    btn3q5.remove()
    question6.style.display="block"
    btn1q6.style.display="inline-block"
    btn2q6.style.display="inline-block"
    btn3q6.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////
//Question 6
let question6 = document.createElement("div")
containerSuivant.appendChild(question6)
question6.style.marginBottom = "30px"
question6.style.display= "none"
question6.innerText=`6. Quelle planète est surnommée la 'Planète rouge' ?`

//bouton 1 question 6
let btn1q6 = document.createElement("button")
btn1q6.textContent="Mars"
containerSuivant.appendChild(btn1q6)
btn1q6.classList.add("monBouton")
btn1q6.style.marginRight = "10px"
btn1q6.style.display= "none"

btn1q6.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question6.remove()
    btn1q6.remove()
    btn2q6.remove()
    btn3q6.remove()
    question7.style.display="block"
    btn1q7.style.display="inline-block"
    btn2q7.style.display="inline-block"
    btn3q7.style.display="inline-block"
})

//bouton 2 question 6
let btn2q6 = document.createElement("button")
btn2q6.textContent="Vénus"
containerSuivant.appendChild(btn2q6)
btn2q6.classList.add("monBouton")
btn2q6.style.marginRight ="10px"
btn2q6.style.display= "none"

btn2q6.addEventListener("click", ()=>{
    question6.remove()
    btn1q6.remove()
    btn2q6.remove()
    btn3q6.remove()
    question7.style.display="block"
    btn1q7.style.display="inline-block"
    btn2q7.style.display="inline-block"
    btn3q7.style.display="inline-block"
})

//bouton3 question 6
let btn3q6 = document.createElement("button")
btn3q6.textContent="Mercure"
containerSuivant.appendChild(btn3q6)
btn3q6.classList.add("monBouton")
btn3q6.style.display= "none"

btn3q6.addEventListener("click", ()=>{
    question6.remove()
    btn1q6.remove()
    btn2q6.remove()
    btn3q6.remove()
    question7.style.display="block"
    btn1q7.style.display="inline-block"
    btn2q7.style.display="inline-block"
    btn3q7.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////
//Question 7
let question7 = document.createElement("div")
containerSuivant.appendChild(question7)
question7.style.marginBottom = "30px"
question7.style.display= "none"
question7.innerText=`7. Quel corps céleste a un cycle de phases visible depuis la Terre ?`

//bouton 1 question 7
let btn1q7 = document.createElement("button")
btn1q7.textContent="Le soleil"
containerSuivant.appendChild(btn1q7)
btn1q7.classList.add("monBouton")
btn1q7.style.marginRight = "10px"
btn1q7.style.display= "none"

btn1q7.addEventListener("click", ()=>{
    question7.remove()
    btn1q7.remove()
    btn2q7.remove()
    btn3q7.remove()
    question8.style.display="block"
    btn1q8.style.display="inline-block"
    btn2q8.style.display="inline-block"
    btn3q8.style.display="inline-block"
})

//bouton 2 question 7
let btn2q7 = document.createElement("button")
btn2q7.textContent="La Lune"
containerSuivant.appendChild(btn2q7)
btn2q7.classList.add("monBouton")
btn2q7.style.marginRight ="10px"
btn2q7.style.display= "none"

btn2q7.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question7.remove()
    btn1q7.remove()
    btn2q7.remove()
    btn3q7.remove()
    question8.style.display="block"
    btn1q8.style.display="inline-block"
    btn2q8.style.display="inline-block"
    btn3q8.style.display="inline-block"
})

//bouton3 question 7
let btn3q7 = document.createElement("button")
btn3q7.textContent="Jupiter"
containerSuivant.appendChild(btn3q7)
btn3q7.classList.add("monBouton")
btn3q7.style.display= "none"

btn3q7.addEventListener("click", ()=>{
    question7.remove()
    btn1q7.remove()
    btn2q7.remove()
    btn3q7.remove()
    question8.style.display="block"
    btn1q8.style.display="inline-block"
    btn2q8.style.display="inline-block"
    btn3q8.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////

//Question 8
let question8 = document.createElement("div")
containerSuivant.appendChild(question8)
question8.style.marginBottom = "30px"
question8.style.display= "none"
question8.innerText=`8. Comment s’appelle la plus grande lune de Saturne ?`

//bouton 1 question 8
let btn1q8 = document.createElement("button")
btn1q8.textContent="Europe"
containerSuivant.appendChild(btn1q8)
btn1q8.classList.add("monBouton")
btn1q8.style.marginRight = "10px"
btn1q8.style.display= "none"

btn1q8.addEventListener("click", ()=>{
    question8.remove()
    btn1q8.remove()
    btn2q8.remove()
    btn3q8.remove()
    question9.style.display="block"
    btn1q9.style.display="inline-block"
    btn2q9.style.display="inline-block"
    btn3q9.style.display="inline-block"
})

//bouton 2 question 8
let btn2q8 = document.createElement("button")
btn2q8.textContent="Titan"
containerSuivant.appendChild(btn2q8)
btn2q8.classList.add("monBouton")
btn2q8.style.marginRight ="10px"
btn2q8.style.display= "none"

btn2q8.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question8.remove()
    btn1q8.remove()
    btn2q8.remove()
    btn3q8.remove()
    question9.style.display="block"
    btn1q9.style.display="inline-block"
    btn2q9.style.display="inline-block"
    btn3q9.style.display="inline-block"
})

//bouton3 question 8
let btn3q8 = document.createElement("button")
btn3q8.textContent="Ganymède"
containerSuivant.appendChild(btn3q8)
btn3q8.classList.add("monBouton")
btn3q8.style.display= "none"

btn3q8.addEventListener("click", ()=>{
    question8.remove()
    btn1q8.remove()
    btn2q8.remove()
    btn3q8.remove()
    question9.style.display="block"
    btn1q9.style.display="inline-block"
    btn2q9.style.display="inline-block"
    btn3q9.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////

//Question 9
let question9 = document.createElement("div")
containerSuivant.appendChild(question9)
question9.style.marginBottom = "30px"
question9.style.display= "none"
question9.innerText=`9. Quelle planète a un immense anticyclone appelé la 'Grande Tache Rouge' ?`

//bouton 1 question 9
let btn1q9 = document.createElement("button")
btn1q9.textContent="Saturne"
containerSuivant.appendChild(btn1q9)
btn1q9.classList.add("monBouton")
btn1q9.style.marginRight = "10px"
btn1q9.style.display= "none"

btn1q9.addEventListener("click", ()=>{
    question9.remove()
    btn1q9.remove()
    btn2q9.remove()
    btn3q9.remove()
    question10.style.display="block"
    btn1q10.style.display="inline-block"
    btn2q10.style.display="inline-block"
    btn3q10.style.display="inline-block"
    
})

//bouton 2 question 9
let btn2q9 = document.createElement("button")
btn2q9.textContent="Uranus"
containerSuivant.appendChild(btn2q9)
btn2q9.classList.add("monBouton")
btn2q9.style.marginRight ="10px"
btn2q9.style.display= "none"

btn2q9.addEventListener("click", ()=>{
    question9.remove()
    btn1q9.remove()
    btn2q9.remove()
    btn3q9.remove()
    question10.style.display="block"
    btn1q10.style.display="inline-block"
    btn2q10.style.display="inline-block"
    btn3q10.style.display="inline-block"
})

//bouton3 question 9
let btn3q9 = document.createElement("button")
btn3q9.textContent="Jupiter"
containerSuivant.appendChild(btn3q9)
btn3q9.classList.add("monBouton")
btn3q9.style.display= "none"

btn3q9.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question9.remove()
    btn1q9.remove()
    btn2q9.remove()
    btn3q9.remove()
    question10.style.display="block"
    btn1q10.style.display="inline-block"
    btn2q10.style.display="inline-block"
    btn3q10.style.display="inline-block"
})

//////////////////////////////////////////////////////////////////////////////////

//Question 10
let question10 = document.createElement("div")
containerSuivant.appendChild(question10)
question10.style.marginBottom = "30px"
question10.style.display= "none"
question10.innerText=`10. Comment s’appelle le télescope spatial lancé en 1990 qui a révolutionné l’astronomie ?`

//bouton 1 question 10
let btn1q10 = document.createElement("button")
btn1q10.textContent="Hubble"
containerSuivant.appendChild(btn1q10)
btn1q10.classList.add("monBouton")
btn1q10.style.marginRight = "10px"
btn1q10.style.display= "none"

btn1q10.addEventListener("click", ()=>{
    score += 1
    updateScoreDisplay()
    question10.remove()
    btn1q10.remove()
    btn2q10.remove()
    btn3q10.remove()
})

//bouton 2 question 10
let btn2q10 = document.createElement("button")
btn2q10.textContent="Kepler"
containerSuivant.appendChild(btn2q10)
btn2q10.classList.add("monBouton")
btn2q10.style.marginRight ="10px"
btn2q10.style.display= "none"

btn2q10.addEventListener("click", ()=>{
    question10.remove()
    btn1q10.remove()
    btn2q10.remove()
    btn3q10.remove()
})

//bouton3 question 10
let btn3q10 = document.createElement("button")
btn3q10.textContent="James Webb"
containerSuivant.appendChild(btn3q10)
btn3q10.classList.add("monBouton")
btn3q10.style.display= "none"

btn3q9.addEventListener("click", ()=>{
    question10.remove()
    btn1q10.remove()
    btn2q10.remove()
    btn3q10.remove()
})


//////////////////////////////////////////////////////////////////////////////////
// score > on le fait apparaitre initialement
let scoreText = document.querySelector(".texte-score")
scoreText.innerText = `Score = ${score}`