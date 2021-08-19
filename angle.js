var angle1=document.getElementById("input-angle1");
var angle2=document.getElementById("input-angle2");
var angle3=document.getElementById("input-angle3");

var outputAngles=document.getElementById("output-angles");

var submitangles=document.getElementById("submit-angles");






function angleHandler(){
  if(!angle1.value||!angle2.value||!angle3.value){
    outputAngles.innerText="Please fill all the angles "
  }
  else{
    if(Number(angle1.value)+Number(angle2.value)+Number(angle3.value)===180){
        outputAngles.innerText=" Yes!!! You can make a triangle with these angles."
    }
    else{
        outputAngles.innerText="Oops! These angles cannot form a triangle. Try another"
        
    }
  }
}
// 

submitangles.addEventListener('click',angleHandler);