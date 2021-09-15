var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var msg3=document.getElementById("message3");


var answer=Math.floor(Math.random()*100)+1;
var number_guesses=0;
var guessed_list=[];

function play() {
    var users_input=document.getElementById("guess").value;
    if(users_input>100 || users_input<1) {
        alert("Please enter a number between 1 and 100");       
    }
    else
    {
        guessed_list.push(users_input);
        number_guesses++;
        if(users_input<answer) {
            if(answer-users_input<=5)
            {
                msg1.textContent="You are a little bit low.Keep it up!!";
            }
            else
            msg1.textContent="Your answer is too low.";
            msg2.textContent="No. of guesses:"+number_guesses;
           msg3.textContent="Numbers guessed till now:"+guessed_list;
        }
        else if(users_input>answer) {
            if(users_input-answer<=5)
            {
                msg1.textContent="You are a little bit high.Keep it up!!";
            }
            else
            msg1.textContent="Your answer is too high.";
            msg2.textContent="No. of guesses:"+number_guesses;
           msg3.textContent="Numbers guessed till now:"+guessed_list;
        }
        else
        {
            msg1.textContent="Correct Answer!!!! "+users_input+"  is the number";
            msg2.textContent="No. of guesses:"+number_guesses;
            msg3.textContent="Numbers guessed till now:"+guessed_list;
        }
    }
    
}
