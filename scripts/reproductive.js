function checkAnswers() {

    const solutions_4= ["answer64", "answer65","answer66","answer67","answer68","answer69","answer70","answer71","answer72","answer73","answer74","answer75"];
    var total4 = 0;
    
    
               for(let x=0; x<solutions_4.length;x++) {
                
                if (document.getElementById(solutions_4[x]).checked==true){
                
                    
                     //alert("It's True");
                     total4+=1;
                        
                }
                                                }
     // alert(solutions_4.length);
    if (total4>=10) 
        {   alert("Well played, you got over 80% and you are okay to PROCEED. Remember you can still look around on the page to learn more");
            
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
    
         alert("Sorry you didn't score high enough, please evaluate your material. We've filled in the gaps again, feel free to do a review and RELOAD the page then trying again");
         highlightAnswers()
         revealBlockThree();
         changeImage();
        }
    //runEvalu(total);
    
    
    }
    
    function changeImage() {
    
        document.querySelector('#no1').src="../imgs/male_reproductive_system/Male_anatomy_1.png";
    
    }
    
    function highlightAnswers() {
    
    
        const solutions_4 = ["answer64", "answer65","answer66","answer67","answer68","answer69","answer70","answer71","answer72","answer73","answer74","answer75"];
        
        for ( let x =0; x < solutions_4.length; x++ ) {
    
            document.getElementById(solutions_4[x]).checked=true;
    
             }
    
    }
    
    function revealBlockThree() {
    
        document.getElementById("block-3").style.visibility="visible";
         
    }
    
    function revealProceed() {
    
       document.getElementById("next1").style.visibility="visible";
    
    }
    
    function redirect1() {
    
        window.location.replace("../pages/integumentary.html");
    }