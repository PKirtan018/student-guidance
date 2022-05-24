const questions = [
    {
        question: "What exactly is a conservative force conserving",
        optionA: "heat",
        optionB: "pressure",
        optionC: "force",
        optionD: "Energy",
        correctOption: "optionD"
    },

    {
        question: "The force that is not one of the conservative forces is ?",
        optionA: "gravitational force",
        optionB: "frictional force",
        optionC: "elastic force",
        optionD: "electric force",
        correctOption: "optionB"
    },

    {
        question: "A field in which the work is done in a moving body along a closed path is zero is called.",
        optionA: "relative field",
        optionB: "electric field",
        optionC: "gravitational field",
        optionD: "Conservative field",
        correctOption: "optionD"
    },

    {
        question: "When a force is parallel to the direction of motion of the body, then work done on the body is.",
        optionA: "undefined",
        optionB: "minimum",
        optionC: "maximum",
        optionD: "neutral",
        correctOption: "optionC"
    },

    {
        question: "Which of the following types of force can do no work on the particle on which it acts?",
        optionA: "magnetic force",
        optionB: "gravitational force",
        optionC: "frictional force",
        optionD: "Centripetal force",
        correctOption: "optionD"
    },

    {
        question: "For equilibrium, the net moment acting on the body by various conservative forces is _____:",
        optionA: "Zero",
        optionB: "one",
        optionC: "two",
        optionD: "three",
        correctOption: "optionA"
    },

    {
        question: "The conservative frictional force always acts ____________ to the surface of the application of the friction.",
        optionA: "parallel",
        optionB: "perpendicular",
        optionC: "tangential",
        optionD: "none of the above",
        correctOption: "optionC"
    },

    {
        question: "dimensional formula of angle is",
        optionA: "dimensionless",
        optionB: "[MLT]",
        optionC: "[ML0T]",
        optionD: "[ML0T2]",
        correctOption: "optionA"
    },

    {
        question: "velocity is___?",
        optionA: "scalar quantity",
        optionB: "equals mass",
        optionC: "always 0",
        optionD: "vector quantity",
        correctOption: "optionD"
    },

    {
        question: "string theory is___?",
        optionA: "says nothing",
        optionB: "nonesense",
        optionC: "proved",
        optionD: "hypothetical",
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