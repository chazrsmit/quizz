let intro = document.querySelector(".mon-texte")
let prenom = prompt("Bienvenue ! Quel est ton prénom ?")

intro.innerText = `Bienvenue ${prenom}, te voilà dans ce quizz très facile sur l'astronomie.`


let question1 = document.createElement("div")
intro.appendChild(question1)
question1.innerText="question 1"



