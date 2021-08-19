
var submitBtn=document.querySelector("#submitQuiz")
var outputTxt=document.querySelector("#output-quiz")

submitBtn.addEventListener("click",getAnswer)

function getAnswer(){

 var answer1=document.getElementById("question1").value
var answer2=document.querySelector("#question2").value
var answer3=document.querySelector("#question3").value
var answer4=document.querySelector("#question4").value
var answer5=document.querySelector("#question5").value
checkAnswer(answer1,answer2,answer3,answer4,answer5)
    
}

function checkAnswer(){
    var ans=["180","90","scalene","45","isosceles"]
    var score=0
   for(var i=0;i<arguments.length;i++)
   {
       if(ans){
           if(arguments[i].toLowerCase()===ans[i])
           score++;
       }
   }
 showscore(score)
 
}
function showscore(score){
    if (score<3)
    outputTxt.innerHTML=`You need to work hard \n your score is ${score}/5`
    else if (score<5&& score>3)
    outputTxt.innerHTML=`You can do better \n your score is ${score}/5`
    else
    outputTxt.innerHTML=`Congrats you got the maximum \n your score is ${score}/5`
}