$(document).ready(()=>{
    var check = 2;
    var check1 = 2;
    console.log("ajhdfjds");
     $('.test').click(()=>{
        if(check%2==0){
            document.querySelector(".dropdown4").classList.add("hidden1");
        document.querySelector(".dropdown3").classList.remove("hidden");
        
        check++;
        }else{
            
            document.querySelector(".dropdown3").classList.add("hidden");
            check++;
        }
     })
     $('.test1').click(()=>{  
        document.querySelector(".dropdown4").classList.add("hidden1");
        document.querySelector(".dropdown3").classList.add("hidden");  
        
     })
     $('.des1').click(()=>{
        if(check1%2==0){
        document.querySelector(".dropdown4").classList.remove("hidden1");
        check1++;
        }else{
            document.querySelector(".dropdown4").classList.add("hidden1");
            check1++;
        }
     })
     $(document).click(()=>{
         document.querySelector(".dropdown4").classList.add("hidden1");
        document.querySelector(".dropdown3").classList.add("hidden");  
     })
    
})