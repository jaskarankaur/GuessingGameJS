

const max = prompt("Enter the max for the range");

const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number between 1 to "+max);

while(true){
    if(guess == "quit"){
        alert("User quit. Better luck next time!");
        break;
    }
    if(guess == random){
        alert(`Congrats!!! you guess the right number ${random}.`);
        break;
    }else if(guess>random){
        guess = prompt("Wrong guess; Your number is larger, go lower. Please try again or type quit to exit.")

    }else if(guess<random){
        guess = prompt("Wrong guess; Your number is smaller, go high. Please try again or type quit to exit.")
    }
}



