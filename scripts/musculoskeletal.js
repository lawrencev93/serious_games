function checkSolutions() {

    const solutions_2 = ["answer1", "answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12","answer13","answer14","answer15","answer16","answer17","answer18","answer19","answer20"];
    var total1 = 0;
    
    
               for(let x=0; x<solutions_2.length;x++) {
                
                if (document.getElementById(solutions_2[x]).checked==true){
                
                    
                     //alert("It's True");
                     total1+=1;
                        
                }
                                                }
      //alert(solutions_2.length);
    if (total1>=16) 
        {   alert("Well played, you scored over 80%,you're free to look around or click the PROCEED button to go to the next stage");
            
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
    
         alert("Sorry you didn't score high enough, please evaluate your material. We changed the diagram and provided a Youtube video for you to look through. You may also want to look at the suggested answers; get some air then have another go. Ensure that you RELOAD the page.");
         highlightAnswers()
         revealBlockThree();
         changeImage();
        }
    //runEvalu(total);
    
    
    }
    
    function changeImage() {
    
        document.querySelector('#no1').src="../imgs/musculoskeletal/musculoskeletal_answer.png";
    
    }
    
    function highlightAnswers() {
    
    
        const solutions_2 = ["answer1", "answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12","answer13","answer14","answer15","answer16","answer17","answer18","answer19","answer20"];
        
        for ( let x =0; x < solutions_2.length; x++ ) {
    
            document.getElementById(solutions_2[x]).checked=true;
    
             }
    
    }
    
    function revealBlockThree() {
    
        document.getElementById("block-3").style.visibility="visible";
         
    }
    
    function revealProceed() {
    
       document.getElementById("next1").style.visibility="visible";
    
    }
    
    function redirect1() {
    
        window.location.replace("../pages/urinary.html");
    }