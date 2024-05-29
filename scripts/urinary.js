function checkAnswers() {

const solutions_1 = ["answer21", "answer22","answer23","answer24","answer25","answer26","answer27","answer28","answer29","answer30","answer31","answer32","answer33","answer34","answer35","answer36"];
var total = 0;
var audio_1 = new Audio('../effects/applause.wav');
var audio_2 = new Audio('../effects/failure.wav');


           for(let x=0; x<solutions_1.length;x++) {
            
            if (document.getElementById(solutions_1[x]).checked==true){
            
                
                 //alert("It's True");
                 total+=1;
                    
            }
                                            }
  //alert(solutions_1.length);
if (total>=13) 
    {   alert("Well played, your total is " + total + " you scored over 80%. You're free to look around or click the PROCEED button to go to the next stage");
        audio_1.play();
        highlightAnswers();
        revealBlockThree();
        changeImage();
        revealProceed();
    }else  {

     alert("Sorry looks like your total of " + total + " high enough, please evaluate your material. We changed the diagram and provided a Youtube video. Please have a look at it as well as the suggested answers highlighted. When ready you can reload the page and go again.");
     audio_2.play();
     highlightAnswers()
     revealBlockThree();
     changeImage();
    }
//runEvalu(total);


}

function changeImage() {

    document.querySelector('#no1').src="../imgs/urinary_system/urinary_system.jpg";

}

function highlightAnswers() {


    const solutions_2 = ["answer21", "answer22","answer23","answer24","answer25","answer26","answer27","answer28","answer29","answer30","answer31","answer32","answer33","answer34","answer35","answer36"];
    
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

    window.location.replace("../pages/immune.html");
}