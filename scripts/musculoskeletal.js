function checkSolutions() {

    const solutions_2 = ["answer1", "answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12","answer13","answer14","answer15","answer16","answer17","answer18","answer19","answer20"];
    var total1 = 0;
    var audio_1 = new Audio('../effects/applause.wav');
    var audio_2 = new Audio('../effects/failure.wav');
    clearInterval(timerInterval);
    
    
    
               for(let x=0; x<solutions_2.length;x++) {
                
                if (document.getElementById(solutions_2[x]).checked==true){
                
                    
                     //alert("It's True");
                     total1+=1;
                        
                }
                                                }
      //alert(solutions_2.length);
    if (total1>=16) 
        {   alert("Well played your total is "  +  total1 +  " and you scored over 80%,you're free to look around or click the PROCEED button to go to the next stage");
            audio_1.play();
            highlightAnswers();
            revealBlockThree();
            changeImage();
            revealProceed();
        }else  {
    
         alert("Sorry your mark" + " " +total1 + " " + "isn't high enough, please evaluate your material. We changed the diagram and provided a Youtube video for you to look through. You may also want to look at the suggested answers; get some air then have another go. Ensure that you RELOAD the page.");
         audio_2.play();
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
