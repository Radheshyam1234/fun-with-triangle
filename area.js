
 var base=document.getElementById("input-base");
 var height=document.getElementById("input-height");
 
 
 var outputArea=document.getElementById("output-area");
 
 var submitData=document.getElementById("submit-data");
 
 
 
 
 
 
 function areaHandler(){
   if(!base.value||!height.value){
     outputArea.innerText="Please fill all the details "
   }
   else{
     var area=0.5*base.value*height.value;
     outputArea.innerText=`Are is equal to ${area} sq units`
   }
 }
 // 
 
 submitData.addEventListener('click',areaHandler);
  
