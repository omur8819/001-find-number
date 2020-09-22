
// random value generated 
const guessMe = Math.floor(Math.random() * 100 + 1); 
console.log(guessMe);
        
// counting the number of guesses 
// made for correct Guess 
let guess = 0; 
const result=document.getElementById('result');
const rabbit=document.getElementById('rabbit');
const dog=document.getElementById('dog');
const checkbtn=document.getElementById("submitguess");
window.addEventListener("keyup", function(evt) {          // Keyup -> Any key pressed
    if (evt.keyCode == 13) {  
        evt.preventDefault();                        // 13 for enter
        checkbtn.click();
    }
  });

  checkbtn.onclick = function(){ 
    // number guessed by user	 
    if(guess==5){
        result.innerHTML=(`<h2 id="answer">Game over! &#128532  Maybe next time &#128521</h2>`); 
        dog.style.visibility="visible";
        dog.style.transitionDuration="1000ms";
        if (window.matchMedia("(min-width: 600px)").matches) {
            dog.style.transform= "scale(1.2) translate(-35%, -20%)";
        } else {
            dog.style.transform= "scale(1.0) translate(-5%, 15%)";
        }
        setTimeout("location.reload(true);", 5000);
        return;
    }
    const inputVal = document.getElementById("guessField").value; 
    if(inputVal<0||isNaN(inputVal)){
       alert("Please enter only positive numbers between 1-100"); 
    }
        
    if(inputVal == guessMe) {
        guess++;
        result.innerHTML=(`<h2 id="answer">You are the winner &#128521 You guest after
        ${guess} times!</h2>`); 
        rabbit.style.visibility="visible";
        rabbit.style.transitionDuration="1000ms";
        if (window.matchMedia("(min-width: 600px)").matches) {
            rabbit.style.transform= "scale(1.2) translate(-5%, -20%)";
        } else {
            rabbit.style.transform= "scale(1.0) translate(20%, 15%)";
        }
        setTimeout("location.reload(true);", 5000);
        return;
       
    } else if(inputVal > guessMe) {	/* if guessed number is greater 
                        than actual number*/ 
        guess++; 
        result.innerHTML=(`<h2 id="answer">I am thinking about lower number</h2>
        <div id="count_it"> This is your guess number: ${guess}</div>`);
    } else{ 
        guess++; 
        result.innerHTML=(`<h2 id="answer">I am thinking about higher number</h2>
        <div id="count_it"> This is your guess number: ${guess}</div>`)
    } 
    document.getElementById('guessField').value=''
    document.getElementById('guessField').focus()
} 