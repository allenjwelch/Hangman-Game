// 1. Declare and assign variables/wordInPlayays for game (word choice)
var wordList = ['LINK', 'MEGAMAN', 'MARIO', 'PACMAN', 'SONIC']

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
var gameActive = false; 
var score = 0; 

// 3. GAME START

document.onkeydown = function(event) {
  gameActive = true; 
  userGuess = event.key;
  userGuess = userGuess.toUpperCase(); 
  console.log('userGuess:', userGuess); 
  lettersGuessed.push(userGuess); 
  document.getElementById('anyKey').style.visibility = "hidden"; 
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
      checkRemaining(); 
    } 
  }; //Close checkLetter function

  function checkWin() {
    if (output.indexOf('__') < 0) {
      console.log('WINNER!');
      score++; 
      gameActive = false; 
      setTimeout(reset, 3000); 
        //Enter Code to change display for each character Win
        if (output.join('') == 'MARIO') {
          document.getElementById('marioWin').style.visibility = "visible"; 
        } else if (output.join('') == 'LINK') {
          document.getElementById('linkWin').style.visibility = "visible"; 
        } else if (output.join('') == 'MEGAMAN') {
          document.getElementById('megamanWin').style.visibility = "visible"; 
        } else if (output.join('') == 'SONIC') {
          document.getElementById('sonicWin').style.visibility = "visible"; 
        } else if (output.join('') == 'PACMAN') {
          document.getElementById('pacmanWin').style.visibility = "visible"; 
        } else {
          return; 
        }; 

        
      } else if (userGuessRemaining == 0) {
        console.log('LOSER!');
        score--; 
        gameActive = false; 
        // reset(); 

        // Display Game Over Screen
        document.getElementById('gameOver').style.visibility = "visible"; 
      } else { }
  }; //Close checkWin function  ----> Updated with reset(); 
    
  function checkRemaining() {
    switch (userGuessRemaining) {
      case 5:
          document.getElementById('head').style.visibility = "visible";
      break; 
      case 4:
        document.getElementById('body').style.visibility = "visible";
      break; 
      case 3:
        document.getElementById('lLeg').style.visibility = "visible";
      break; 
      case 2:
        document.getElementById('rLeg').style.visibility = "visible"; 
      break; 
      case 1:
        document.getElementById('rArm').style.visibility = "visible"; 
      break; 
      case 0:
        document.getElementById('lArm').style.visibility = "visible"; 
      break; 
      case -1:
        reset(); 
      default: 
        return; 
    }
  }; //Close checkLetter function
  
  function reset () {
    // document.onkeydown = function() {
    
      console.log('Game Reset'); 
      document.getElementById('anyKey').style.visibility = "visible"; 
      wordInPlay = wordList[(Math.floor(Math.random() * wordList.length))]; 
      console.log(wordInPlay); 
      
      wordInPlay = wordInPlay.split(""); 
      console.log(wordInPlay);
      
      output = []; 
      for (var i = 0; i < wordInPlay.length; i++) {
        output.push("__")
      } console.log(output); 
      
      userGuessRemaining = 6; 
      
      lettersGuessed = []; 

      document.getElementById('gameOver').style.visibility = "hidden"; 
      document.getElementById('head').style.visibility = "hidden"; 
      document.getElementById('body').style.visibility = "hidden"; 
      document.getElementById('lLeg').style.visibility = "hidden"; 
      document.getElementById('rLeg').style.visibility = "hidden"; 
      document.getElementById('rArm').style.visibility = "hidden"; 
      document.getElementById('lArm').style.visibility = "hidden"; 
      document.getElementById('linkWin').style.visibility = "hidden"; 
      document.getElementById('marioWin').style.visibility = "hidden"; 
      document.getElementById('megamanWin').style.visibility = "hidden"; 
      document.getElementById('pacmanWin').style.visibility = "hidden"; 
      document.getElementById('sonicWin').style.visibility = "hidden"; 

  }; //Close reset function


  checkLetter(userGuess); 
  checkWin(); 

  console.log('lettersGuessed:', lettersGuessed);
  console.log('userGuessRemaining:', userGuessRemaining); 
        
  ///////////////// DISPLAYS INPUT ON SCREEN//////////////////
  document.getElementById("output").innerHTML = output.join(' '); 
  document.getElementById("guess").innerHTML = lettersGuessed.join(' '); 
  document.getElementById("userGuessRemaining").innerHTML = userGuessRemaining;
  document.getElementById("score").innerHTML = score;

}; //End document.event
  


    
    


//////////////////////////SCRAP HEAP///////////////////
      // var vowels = 'aeiouAEIOU'.split('');
      //         console.log(vowels); 

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