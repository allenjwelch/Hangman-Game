

// 1. Declare and assign variables/wordInPlayays for game (word choice)
var wordList = ['ABBA', 'CDDC', 'EFFE', 'GHHG']

// 2. Comp chooses 1 word from the word choices wordInPlayay for each game

var wordInPlay = wordList[(Math.floor(Math.random() * wordList.length))]; 
  console.log(wordInPlay); 

var wordInPlay = wordInPlay.split(""); 
  console.log(wordInPlay);

var output = []; 
  for (var i = 0; i < wordInPlay.length; i++) {
    output.push("__")
  } console.log(output); 

var userGuessRemaining = 6; 
    
var lettersGuessed = []; 

var correctLetter;






// 3. GAME START
// function gamePlay() {
  document.onkeydown = function(event) {
    userGuess = event.key;
    userGuess = userGuess.toUpperCase(); 
    console.log('userGuess:', userGuess); 
    lettersGuessed.push(userGuess); 


    // ALL GAME CODE GOES IN THIS FUNCTION

    //Check if userGuess matches wordInPlay 
    function checkLetter() {
      //First, checks to see if there is a match
      if (wordInPlay.includes(userGuess)) {
        correctLetter = true; 
        console.log('MATCH!'); 
        //If a match was found FOR loop begins to loops through all letters
        for (i = 0; i < wordInPlay.length; i++) {
          console.log(i); 
          //As the FOR loop cycles through all letters, each time a value in the array matches the userGuess the output array updates with the same value and index
          if (wordInPlay[i] === userGuess) {
            output[i] = wordInPlay[i];
          } else {
            console.log("This is exiting the nested IF loop"); 
          }
        }; 
      } else {
        correctLetter = false; 
        console.log('NO match');
        userGuessRemaining--; 
      } 
    }; //Close checkLetter function

    //////////////////////////SCRAP HEAP///////////////////
      // if (wordInPlay.indexOf(userGuess) > -1) {
      //   console.log('MATCH!'); 
      //   var newIndex = wordInPlay.indexOf(userGuess)
      //   console.log(newIndex);
      //   output[wordInPlay.indexOf(userGuess)] = userGuess; 
        
      // } else {
      //   console.log('NO match'); 
      //   userGuessRemaining--; 
      //   } 

      // if (wordInPlay[i] === userGuess) {
      //   correctLetter = true; 
      //   console.log('MATCH!'); 
      //   output[wordInPlay.indexOf(userGuess)] = userGuess; 
      //   wordInPlay[userGuess] = 'X'; 
      // } else {
      //   correctLetter = false; 
      //   console.log('NO match');
      // }

      function checkWin() {
        if (output.indexOf('__') < 0) {
          console.log('WINNER!');
        } else if (userGuessRemaining == 0) {
          console.log('LOSER!');
        } else {
          console.log('idk!');
        }
      };
    
    //   function addClown() {
    //     switch (userGuessRemaining) {
    //       case 5:
    //         document.querySelector('#clownHead').style.visibility = "visibile";
    //         break; 
    //       case 4:
    //         document.querySelector('#clownBody').style.visibility = "visibile";
    //         break; 
    //       case 3:
    //         document.querySelector('#clownHead').style.visibility = "visibile";
    //         break; 
    //   }
    // }



    
    checkLetter(userGuess); 
    checkWin(); 
    console.log('lettersGuessed:', lettersGuessed);
    console.log('userGuessRemaining:', userGuessRemaining); 

    ///////////////////// DISPLAYS INPUT ON SCREEN/////////////////////
    document.getElementById("wordInPlay").innerHTML = wordInPlay;
    document.getElementById("output").innerHTML = output.join(' '); 
    document.getElementById("guess").innerHTML = lettersGuessed.join(' '); 
    document.getElementById("userGuessRemaining").innerHTML = userGuessRemaining; 






  }; //End document.event

// }; //End gamePlay









    // // CONVERTS AN ARRAY INTO AN OBJECT
    // var obj = {};
    // wordInPlay.forEach(function(data){
    //     obj[data[0]] = data[1]
    // });

    // console.log(obj);







    
    // var vowels = 'aeiouAEIOU'.split('');
    //         console.log(vowels); 
    

    
    
    



    
    // 4. User chooses a letter at a time & code checks if each letter is within the word choice
    
    
    // 5. Choices are displayed letters guessed area on screen. If user chooses correct letter, correct letter gets displayed in different area of the screen. If user chooses incorrect letter, userGuess# reduces by 1 
    
    
    
    
    


