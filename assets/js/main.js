
let buttonItem = document.querySelectorAll(".button")
let score = 0
const quest = ["Dans quel film entent-on: You talking to me?", "Dans la vie ya ceux qui portent les colt et ceux qui creusent...", "si tu travail avec un marteau piqueur pendant un tremblement de terre...", " Qui as dit: May the force be with you"];
const rep = [
    ["Scarface", "La tour infernal Montparnasse", "taxidriver", "Marry Poppins"],
    ["toi tu creuse ...", "Prend la pelle...", "NON!ne me tire pas dessus!", "Sa fait mal aux mains!"],
    ["arrète c'est dangeureux", "desynchronise toi sinon tu travail pour rien", "tu va plus vite", "arrete et regarde le mur tomber"],
    ["Eli cacou ", "Bruce Lee ", "le lapin dans alice", "maitre yoda"]
]
const repok = [rep[0][2], rep[1][0], rep[2][1], rep[3][3]];
let interQuest = []
let interRep = []
let interRepok = []

function createGame() {
    document.querySelector("#score").innerText = score
    for (let i = 0; i < quest.length; i++) {
        interQuest.push(quest[i])
        console.log("interQuest");
    }

    for (let i = 0; i < rep.length; i++) {
        interRep.push(rep[i])
    }

    for (let i = 0; i < repok.length; i++) {
        interRepok.push(repok[i])
    }
}



function displayQuest() {
    document.querySelector("#question").innerText = interQuest[0]
}


function displayRep() {
    let tab = document.querySelectorAll('.button')
    for (let i = 0; i < tab.length; i++) {
        tab[i].innerText = interRep[0][i]
    }
}

function checkAnswer(element) {
    if (element.innerText == interRepok[0]) {
        score++
        document.querySelector("#score").innerText = score

    }
    deleteQuestion()
    quizz()
}

function quizz() {
    if (interQuest.length == 0) {
        document.querySelector("#question").innerText = "Quizz terminé"
    } else {
        displayQuest()
        displayRep()
    }
}

function deleteQuestion() {
    interQuest.splice(0, 1)
    interRep.splice(0, 1)
    interRepok.splice(0, 1)
}


function restart() {
    score = 0
    document.querySelector("#score").innerText = score
    createGame()
    quizz()
}

//******************chrono***************//
let time = 20
function displayTime(rebour) {
    document.querySelector("#comptarebour").innerText = rebour
}
function updateTime() {
    if (time > 0) {
        setTimeout(function () {
            time--
            displayTime(time)
            updateTime()
        }, 1000)
    } else {
        deleteQuestion()
        quizz()
        time = 20
        updateTime()
    }
}
createGame()
quizz()
displayTime(time)
updateTime()

//*******************aleatoire****************/
function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}



