document.getElementById("check").addEventListener(
    "click", checkNumber)

    let counter = 0;
    const myNum = Math.floor(Math.random() * 101);
    
    function checkNumber(){
        let guessNum = document.getElementById("guess").value;
        counter += 1;

        
        if (guessNum == ""){
            document.getElementById("answer").innerHTML = "Write a number?";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
        } else if (isNaN(guessNum)) {
            document.getElementById("answer").innerHTML = "Are you sure that this is a number?";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
        } else if (guessNum < myNum){
            document.getElementById("answer").innerHTML = "I am thinking about higher number";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
        } else if (guessNum > myNum) {
            document.getElementById("answer").innerHTML = "I am thinking about lower number";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
        }
        else {
            alert("You are the winner :😀 👌. " + "You guessed after " + counter + " times!" );
            if (window.confirm("You wanna play again!")) {
                window.location.href = "./index.html"
            }
            else {
                document.getElementById("answer").innerHTML = "Thanks for playing game.";
                document.getElementById("counter").innerHTML = "";
            }
        }
    }