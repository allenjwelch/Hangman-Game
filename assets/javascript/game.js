

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

var correctLetter;


function gameStart () {
}; //End gamePlay







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
        checkRemaining(); 
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
          //Enter Code to change display for each character Win

          if (output.join('') == 'MARIO') {
            var marioWin = document.createElement("IMG");
              marioWin.setAttribute("src", "assets/images/mario.gif");
              marioWin.setAttribute("alt", "mario win");
              marioWin.setAttribute("id", "marioWin");
              document.getElementById('hangmanImgs').appendChild(marioWin);
          } else if (output.join('') == 'LINK') {
              var linkWin = document.createElement("IMG");
                linkWin.setAttribute("src", "assets/images/link.gif");
                linkWin.setAttribute("alt", "linkWin");
                linkWin.setAttribute("id", "linkWin");
                document.getElementById('hangmanImgs').appendChild(linkWin);
          } else if (output.join('') == 'MEGAMAN') {
              var megamanWin = document.createElement("IMG");
                megamanWin.setAttribute("src", "assets/images/megaMan.gif");
                megamanWin.setAttribute("alt", "megamanWin");
                megamanWin.setAttribute("id", "megamanWin");
                document.getElementById('hangmanImgs').appendChild(megamanWin);
          } else if (output.join('') == 'SONIC') {
              var sonicWin = document.createElement("IMG");
              sonicWin.setAttribute("src", "assets/images/sonic.gif");
              sonicWin.setAttribute("alt", "sonicWin");
              sonicWin.setAttribute("id", "sonicWin");
              document.getElementById('hangmanImgs').appendChild(sonicWin);
          } else if (output.join('') == 'PACMAN') {
              var pacmanWin = document.createElement("IMG");
              pacmanWin.setAttribute("src", "assets/images/pacman.gif");
              pacmanWin.setAttribute("alt", "pacmanWin");
              pacmanWin.setAttribute("id", "pacmanWin");
              document.getElementById('hangmanImgs').appendChild(pacmanWin);
          } else {
            return; 
          }; 


        } else if (userGuessRemaining == 0) {
          console.log('LOSER!');
          // document.body.style.backgroundImage = "url('assets/images/gameOver.gif')"
          // document.body.style.backgroundSize = "100%";

          var gameOver = document.createElement("IMG");
            gameOver.setAttribute("src", "assets/images/gameOver.gif");
            gameOver.setAttribute("alt", "game over");
            gameOver.setAttribute("id", "gameOver");
            document.body.appendChild(gameOver);
        } else {
          console.log('idk!');
        }
      };
    
      function checkRemaining() {
        switch (userGuessRemaining) {
          case 5:
            var head = document.createElement("IMG");
            head.setAttribute("src", "assets/images/head.png");
            head.setAttribute("alt", "head");
            head.setAttribute("id", "head");
            document.body.appendChild(head);
            break; 
          case 4:
            var body = document.createElement("IMG");
            body.setAttribute("src", "assets/images/body.png");
            body.setAttribute("alt", "body");
            body.setAttribute("id", "body");
            document.body.appendChild(body);
            break; 
          case 3:
            var lLeg = document.createElement("IMG");
            lLeg.setAttribute("src", "assets/images/lLeg.png");
            lLeg.setAttribute("alt", "body");
            lLeg.setAttribute("id", "lLeg");
            document.body.appendChild(lLeg);    
          break; 
          case 2:
            var rLeg = document.createElement("IMG");
            rLeg.setAttribute("src", "assets/images/rLeg.png");
            rLeg.setAttribute("alt", "body");
            rLeg.setAttribute("id", "rLeg");
            document.body.appendChild(rLeg);            
          break; 
          case 1:
            var rArm = document.createElement("IMG");
            rArm.setAttribute("src", "assets/images/rArm.png");
            rArm.setAttribute("alt", "body");
            rArm.setAttribute("id", "rArm");
            document.body.appendChild(rArm);            
          break; 
          case 0:
            var lArm = document.createElement("IMG");
            lArm.setAttribute("src", "assets/images/lArm.png");
            lArm.setAttribute("alt", "body");
            lArm.setAttribute("id", "lArm");
            document.body.appendChild(lArm);            
          default: 
          return; 
        }
      };




    
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
    
    
    
    
    


