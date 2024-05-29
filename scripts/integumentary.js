function checkAnswers() {

    const solutions_5= ["answer52", "answer53","answer54","answer55","answer56","answer57","answer58","answer59","answer60","answer61","answer62","answer63"];
    var total5 = 0;
    var audio_1 = new Audio('../effects/applause.wav');
    var audio_2 = new Audio('../effects/failure.wav');
    clearInterval(timerInterval);
    
    
               for(let x=0; x<solutions_5.length;x++) {
                
                if (document.getElementById(solutions_5[x]).checked==true){
                
                    
                     //alert("It's True");
                     total5+=1;
                        
                }
                                                }
     // alert(solutions_5.length);
    if (total5>=10) 
        {   alert("Well played your total is " + total5 + " , you got over 80% and you are okay to PROCEED. You can still stay to look around if you like.");
    audio_1.play();
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
    
         alert("Sorry your score of " + total5 + " is not high enough, please evaluate your material. We did our best to nudge you along with a complete diagram, model answers and another video; RELOAD the page then try again");
         audio_2.play();
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

    var timeLimitInMinutes = 11;
    var timeLimitInSeconds = timeLimitInMinutes * 60;
    var timerElement = document.getElementById('countdown');
    var timerInterval = setInterval(myTimer, 1000);


function myTimer() {
  
  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  if (timeLimitInSeconds < 0) {
    timerElement.innerHTML = '00:00';
    clearInterval(timerInterval);
    alert("You have run out of time, the quiz will now auto-evaluate");
    checkAnswers();
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timerElement.innerHTML = minutes + ':' + seconds;

}
