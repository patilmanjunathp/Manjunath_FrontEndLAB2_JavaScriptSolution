function Quiz(){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}

Quiz.prototype.getQuestionByIndex=function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer=function(answer){
     if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded=function(){
   return this.questionIndex===this.questions.length;
}

function Question(text , choices ,answer){
 this.text=text;
 this.choices=choices;
 this.answer=answer;
}

Question.prototype.isCorrectAnswer=function(choice){
    return this.answer===choice;
}
var questions=[
    new Question("javaScript supports",["Functions","XHTML","CSS","HTML"],"Functions"),
    new Question("Which language is used for styling web Pages ?",["Python Script","JQuery","CSS","XML"],"CSS"),
    new Question("Which is not a javaScript Framework ?",["HTML","JQuery","Django","NodeJs"],"Django"),
    new Question("Which is used to connect database ?",["PHP","HTML","JS","ALL"],"PHP"),
    new Question("javaScript is a ?",["language","Programming Language","Development","ALL"],"Programming Language"),
];


function loadQuestions(){
    if(quiz.isEnded()){
        showScores()
        
    }
    else{
       let question=quiz.getQuestionByIndex();
       var element=document.getElementById("question");
      element.innerHTML=question.text;
       var choices=question.choices;
       for(let i=0;i<choices.length;i++){
       var element=document.getElementById("choice"+i);
       element.innerHTML=question.choices[i];
        handleOptionButton("btn"+i, question.choices[i]);
       } 
       showProgressBar()
    }

}

function handleOptionButton(id,choice){
    let button=document.getElementById(id);
    button.onclick=function(){
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}
let quiz=new Quiz(questions);
loadQuestions();

function showScores(){
    let scoreHtml = "<h1>Result</h1>";
    scoreHtml += "<h2 id='score'>Your scores:"+quiz.score+ " </h2>"
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = scoreHtml;
  }
  
  function showProgressBar(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  }
  