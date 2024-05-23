function checkAnswers() {

    const solutions_5= ["answer52", "answer53","answer54","answer55","answer56","answer57","answer58","answer59","answer60","answer61","answer62","answer63"];
    var total5 = 0;
    
    
               for(let x=0; x<solutions_5.length;x++) {
                
                if (document.getElementById(solutions_5[x]).checked==true){
                
                    
                     //alert("It's True");
                     total5+=1;
                        
                }
                                                }
     // alert(solutions_5.length);
    if (total5>=10) 
        {   alert("Well played, you got over 80% and you are okay to PROCEED. You can still stay to look around if you like.");
            
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
    
         alert("Sorry you didn't score high enough, please evaluate your material. We did our best to nudge you along with a complete diagram, model answers and another video; RELOAD the page then try again");
         highlightAnswers()
         revealBlockThree();
         changeImage();
        }
    //runEvalu(total);
    
    
    }
    
    function changeImage() {
    
        document.querySelector('#no1').src="../imgs/integumentary_system/human_skin_solution.png";
    
    }
    
    function highlightAnswers() {
    
    
        const solutions_5 = ["answer52", "answer53","answer54","answer55","answer56","answer57","answer58","answer59","answer60","answer61","answer62","answer63"];
        
        for ( let x =0; x < solutions_5.length; x++ ) {
    
            document.getElementById(solutions_5[x]).checked=true;
    
             }
    
    }
    
    function revealBlockThree() {
    
        document.getElementById("block-3").style.visibility="visible";
         
    }
    
    function revealProceed() {
    
       document.getElementById("next1").style.visibility="visible";
    
    }
    
    function redirect1() {
        alert("You have completed the challenge, you will now be redirected to the Start page");
        window.location.replace("../index.html");

    }