function checkAnswers() {

    const solutions_3= ["answer37", "answer38","answer39","answer40","answer41","answer42","answer43","answer44","answer45","answer45","answer47","answer48","answer49","answer50","answer51"];
    var total3 = 0;
    var audio_1 = new Audio('../effects/applause.wav');
    var audio_2 = new Audio('../effects/failure.wav');
    clearInterval(timerInterval);
    
               for(let x=0; x<solutions_3.length;x++) {
                
                if (document.getElementById(solutions_3[x]).checked==true){
                
                    
                     //alert("It's True");
                     total3+=1;
                        
                }
                                                }
      //alert(solutions_3.length);
    if (total3>=12) 
        {   
            alert("Well played, you got over 80%");
            audio_1.play();
            alert("Your total mark is " + total3 + " you may PROCEED." );
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
         
            alert("Sorry you didn't score high enough, please review your material. We've filled out the diagram and provided a Youtube video which should be a great help. We've also provided model. Don't forget to RELOAD the page when you try again.");
            audio_2.play();
         highlightAnswers()
         revealBlockThree();
         changeImage();
        }
    //runEvalu(total);
    
    
    }
    
    function changeImage() {
    
        document.querySelector('#no1').src="../imgs/immune_system/immune_system_solution.webp";
    
    }
    
    function highlightAnswers() {
    
    
        const solutions_3 = ["answer37", "answer38","answer39","answer40","answer41","answer42","answer43","answer44","answer45","answer45","answer47","answer48","answer49","answer50","answer51"];
        
        for ( let x =0; x < solutions_3.length; x++ ) {
    
            document.getElementById(solutions_3[x]).checked=true;
    
             }
    
    }
    
    function revealBlockThree() {
    
        document.getElementById("block-3").style.visibility="visible";
         
    }
    
    function revealProceed() {
    
       document.getElementById("next1").style.visibility="visible";
    
    }
    
    function redirect1() {
    
        window.location.replace("../pages/reproductive.html");
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

