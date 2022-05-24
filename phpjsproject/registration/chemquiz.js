const questions = [
    {
        question: "which of the following is not an element?",
        optionA: "ozone",
        optionB: "diamond",
        optionC: "graphite",
        optionD: "silica",
        correctOption: "optionD"
    },

    {
        question: "a pure substance can only be",
        optionA: "slag",
        optionB: "element",
        optionC: "flux",
        optionD: "mixture",
        correctOption: "optionB"
    },

    {
        question: "which of the following is not present in cement",
        optionA: "alumina",
        optionB: "clay",
        optionC: "gypsum",
        optionD: "alum",
        correctOption: "optionD"
    },

    {
        question: "the first organic compound synthesized in lab is ",
        optionA: "ethanol",
        optionB: "nitric acid",
        optionC: "urea",
        optionD: "benzene",
        correctOption: "optionC"
    },

    {
        question: "miniamata's disease is caused by",
        optionA: "cl compound",
        optionB: "zn compound",
        optionC: "al compound",
        optionD: "Hg compound",
        correctOption: "optionD"
    },

    {
        question: "which is mainly responsible for ozone layer depletion",
        optionA: "CFC",
        optionB: "HCF",
        optionC: "CO2",
        optionD: "CH3Br",
        correctOption: "optionA"
    },

    {
        question: "the pollutant released in bhopal gas tragedy was",
        optionA: "nitrous oxide",
        optionB: "carbon mono-oxide",
        optionC: "methyl isocyanate",
        optionD: "none of the above",
        correctOption: "optionC"
    },

    {
        question: "BOD is measure of",
        optionA: "organic pollutant",
        optionB: "inorganic pollutant",
        optionC: "oxides of SPN",
        optionD: "particulate matter",
        correctOption: "optionA"
    },

    {
        question: " ozone is present in",
        optionA: "thermosphere",
        optionB: "mesosphere",
        optionC: "troposphere",
        optionD: "stratosphere",
        correctOption: "optionD"
    },

    {
        question: " water pollution is less if bod is?",
        optionA: ">6ppm",
        optionB: ">15ppm",
        optionC: ">100ppm",
        optionD: ">5ppm",
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