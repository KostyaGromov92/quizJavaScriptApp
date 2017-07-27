/**
 * Created by KostyaGromov on 27.07.2017.
 */

function populate () {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choicess = quiz.getQuestionIndex().choices;

        for (var i = 0; i < choicess.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choicess[i];
            guess("btn" + i, choicess[i]);
        }

        showProgress();
    }
}

function guess (id, guess) {
    var button = document.getElementById(id);

    button.onclick = function () {
        quiz.guess(guess);
        populate();
    };
}

function showProgress () {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores () {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which language is used for styling web page1 ? ", ["HTML", "Jquery","CSS", "XML"], "CSS"),
    new Question("Which language is used for styling web page2 ? ", ["HTML", "Jquery","CSS", "XML"], "CSS"),
    new Question("Which language is used for styling web page3 ? ", ["HTML", "Jquery","CSS", "XML"], "CSS"),
    new Question("Which language is used for styling web page4 ? ", ["HTML", "Jquery","CSS", "XML"], "CSS"),
    new Question("Which language is used for styling web page5 ? ", ["HTML", "Jquery","CSS", "XML"], "CSS")
];

var quiz = new Quiz(questions);

populate();