const questions = [
    {
        question: "2+2 is",
        optionA: "6",
        optionB: "9",
        optionC: "5",
        optionD: "4",
        correctOption: "optionD"
    },

    {
        question: "which is the prime number",
        optionA: "15",
        optionB: "2",
        optionC: "6",
        optionD: "4",
        correctOption: "optionB"
    },

    {
        question: "if all the sides is equal then the triangle is",
        optionA: "right angled",
        optionB: "scalene",
        optionC: "isosceles",
        optionD: "equilateral",
        correctOption: "optionD"
    },

    {
        question: "pythagoras theorem gives",
        optionA: "symmetricity",
        optionB: "nothing",
        optionC: "distance formula",
        optionD: "tangent",
        correctOption: "optionC"
    },

    {
        question: "if one angle is 30 degree and second angle is 40 degree find third angle?",
        optionA: "70 degrees",
        optionB: "20 degrees",
        optionC: "60 degrees",
        optionD: "110 degrees",
        correctOption: "optionD"
    },

    {
        question: "set is the collection of",
        optionA: "well defined objects",
        optionB: "objects",
        optionC: "class",
        optionD: "places",
        correctOption: "optionA"
    },

    {
        question: "if x+10=6 what is the value of x?",
        optionA: "-3",
        optionB: "5",
        optionC: "-4",
        optionD: "none of the above",
        correctOption: "optionC"
    },

    {
        question: " A={highest peak in the world } is ",
        optionA: "singular set",
        optionB: "null set",
        optionC: "adjacent set",
        optionD: "functional set",
        correctOption: "optionA"
    },

    {
        question: "quadratic equation forms ____ ",
        optionA: "W curve",
        optionB: "nothing",
        optionC: "straight line",
        optionD: "parabola",
        correctOption: "optionD"
    },

    {
        question: "0/0 is",
        optionA: "infinity",
        optionB: "1",
        optionC: "0",
        optionD: "undefined",
        correctOption: "optionD"
    },



]


let randomQuestions = []

function maintainQuestions() {

    while (randomQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!randomQuestions.includes(random)) {
            randomQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0


function NextQuestion(index) {
    maintainQuestions()
    const currentQuestion = randomQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkanswer() {
    const currentQuestion = randomQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })


    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkanswer()
    unCheckRadioButtons()

    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null


    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100


    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    randomQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}