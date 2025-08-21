    /* Code used during the JavaScript programming logic course offered by Alura. Completion of this course is required to continue the ONE (education program) course. */
    
    alert('Welcome to the game of the secret number!');
    let sizeofCounting = prompt("Enter the number that will dictate the maximum sample size ");
    let secretNumber = parseInt(Math.random() * sizeofCounting + 1); //function Math.random for the number.
    console.log(secretNumber);
    let chooseNumber;
    let attempts = 1; //starts with one because the person needs to start guessing

    // while the choose number is not the same as the secret number, do:
    while(chooseNumber != secretNumber){
    
        chooseNumber = prompt(`Choose a number between 1 and ${sizeofCounting}: `);
        //if the hunch is right: 
        if (chooseNumber == secretNumber){
            //STOP the while
            break;
        } else {
            if(chooseNumber > secretNumber){
                alert(`The number ${chooseNumber} is bigger than the secret number.`);
            } else {
                alert(`The number  ${chooseNumber} is smaller than the secret number.`);
            }
            attempts++;
        }  
    }

    //ternary operator:
    let theAttempts = attempts > 1 ? 'attempts' : 'attempt';
    alert(`Thats right! You discovered the secret number: (${secretNumber}) with ${attempts} ${theAttempts}`);

    /* Longer way without a ternary operator:

    if(attempts > 1){
        //template strings to show the number in secretNumber even if we change the value.
        alert(`Thats right! You discovered the secret number: (${secretNumber}) with ${attempts} attempts.`);
    } else {
        alert(`Thats right! You discovered the secret number: (${secretNumber}) with ${attempts} attempt.`);
    }
    */


