

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

var correctLetter = false;






// 3. GAME START
document.onkeydown = function(event) {
  var userGuess = event.key;
  userGuess = userGuess.toUpperCase(); 
  console.log(userGuess); 
  lettersGuessed.push(userGuess); 


// ALL GAME CODE GOES IN THIS FUNCTION

//Check if userGuess matches wordInPlay
  
  
function checkLetter(userGuess) {
  // for (i = 0; i < wordInPlay.length; i++) {
  
    if (wordInPlay.indexOf(userGuess) > -1) {
      console.log('MATCH!'); 
      output[wordInPlay.indexOf(userGuess)] = userGuess; 
    } else {
      console.log('NO match'); 
      userGuessRemaining--; 
    } 
  // }


}

  // if (wordInPlay.includes(userGuess)) {


  checkLetter(userGuess); 
  console.log('lettersGuessed:', lettersGuessed);
  console.log('userGuessRemaining:', userGuessRemaining); 

  ///////////////////// DISPLAYS INPUT ON SCREEN/////////////////////
  document.getElementById("wordInPlay").innerHTML = wordInPlay;
  document.getElementById("output").innerHTML = output; 
  document.getElementById("guess").innerHTML = lettersGuessed; 
  document.getElementById("userGuessRemaining").innerHTML = userGuessRemaining; 






};









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
    
    
    
    
    


