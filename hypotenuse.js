var outputHypo=document.getElementById("output-hypo");

 var base=document.getElementById("input-base");
 var height=document.getElementById("input-height");
 var submitHypotenuse=document.getElementById("submit-data");

 submitHypotenuse.addEventListener('click',HypotenuseHandler);


 function HypotenuseHandler(){
     if(!base.value||!height.value){
        outputHypo.innerText="Please add both the fields";
     }
   else
   { var a=base.value;
     var prod1=a*a;
     var b=height.value;
     var prod2=b*b;
     var c=Math.sqrt(prod2+prod1);
    outputHypo.innerText=c;}
   

}