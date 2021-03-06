'use strict';


function askName(){
  var userName = prompt( 'Hi. What should I call you?' );
  console.log( 'The user\'s name is ' + userName + '.' );
  alert( 'Nice to meet you, ' + userName + '! Think you can guess how old I am? Most people can\'t.' );
}

function userGuessOne(){
  do {
    var ageGuess1 = prompt( 'Do you think I am older than 20?' ).toLowerCase();
    if ( ageGuess1 === 'yes' ) {
      alert( 'Good start! Let\'s keep going.' );
      console.log( 'The user correctly responded ' + ageGuess1 + '.' );
      break;
    } else if ( ageGuess1 === 'no' ) {
      alert( 'Wrong. Let\'s start over, shall we?' );
      console.log( 'The user incorrectly responded ' + ageGuess1 + '.' );
      var ageCorrect1 = false;
    } else {
      alert( 'Please answer \'yes\' or \'no\'.' );
      console.log( 'The user\'s response was invalid.' );
      ageCorrect1 = false;
    }
  } while ( ageCorrect1 === false );
}

function userGuessTwo(){
  do {
    var ageGuess2 = prompt( 'Do you think I am older than 25?' ).toLowerCase();
    if ( ageGuess2 === 'yes' ) {
      alert( 'Impressive. Keep going, brainiac!' );
      console.log( 'The user correctly responded ' + ageGuess2 + '.' );
      break;
    } else if ( ageGuess2 === 'no' ) {
      alert( 'Ah, unlucky. Back it up, brainiac.' );
      console.log( 'The user incorrectly responded ' + ageGuess2 + '.' );
      var ageCorrect2 = false;
    } else {
      alert( 'Please answer \'yes\' or \'no\'.' );
      console.log( 'The user\'s response was invalid.' );
      ageCorrect2 = false;
    }
  } while ( ageCorrect2 === false );
}

function userGuessThree() {
  do {
    var ageGuess3 = prompt( 'Do you think I am older than 30?' ).toLowerCase();
    if ( ageGuess3 === 'yes' ) {
      alert( 'Yes! Hey, you\'re getting the hang of this.' );
      console.log( 'The user correctly responded ' + ageGuess3 + '.' );
      break;
    } else if ( ageGuess3 === 'no' ) {
      alert( 'Oof. Try again.' );
      console.log( 'The user incorrectly responded ' + ageGuess3 + '.' );
      var ageCorrect3 = false;
    } else {
      alert( 'Please answer \'yes\' or \'no\'.' );
      console.log( 'The user\'s response was invalid.' );
      ageCorrect3 = false;
    }
  } while ( ageCorrect3 === false );
}

function userGuessFour(){
  do {
    var ageGuess4 = prompt( 'Do you think I am older than 35?' ).toLowerCase();
    if ( ageGuess4 === 'no' ) {
      alert( 'Well played. I am technically 35 until April 18.' );
      console.log( 'The user correctly responded ' + ageGuess4 + '.' );
      break;
    } else if ( ageGuess4 === 'yes' ) {
      alert( 'Ah, it was too good to last, wasn\'t it? Try again.' );
      console.log( 'The user incorrectly responded ' + ageGuess4 + '.' );
      var ageCorrect4 = false;
    } else {
      alert( 'Please answer \'yes\' or \'no\'.' );
      console.log( 'The user\'s response was invalid.' );
      ageCorrect4 = false;
    }
  } while ( ageCorrect4 === false );
}

function userGuessFive() {
  var scoobyGuess = prompt( 'Do you think I enjoy the show \'Scooby-Do?\'' ).toLowerCase();
  if ( scoobyGuess === 'no' ) {
    alert( 'Correct! If that sad excuse for some nonsense never airs again, it will be too soon.' );
    console.log( 'The user correctly responded ' + scoobyGuess + '.' );
  } else if ( scoobyGuess === 'yes' ) {
    alert( 'No. The creators of that show must have been collectively dropped on their heads.' );
    console.log( 'The user incorrectly responded ' + scoobyGuess + '.' );
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
    console.log( 'The user\'s response was invalid.' );
  }
}

function guessAgeGame(){
  askName();
  userGuessOne();
  userGuessTwo();
  userGuessThree();
  userGuessFour();
  userGuessFive();
}
guessAgeGame();

var totalGuesses = 4;
var myWeight = 169;
var userAnswer;

function guessWeight() {
  while ( totalGuesses > 0 ) {
    userAnswer = parseInt( prompt( 'Let\'s try a new game. Can you guess my weight?' ));
    console.log( 'User entered ' + userAnswer + '.' );
    totalGuesses--;
    if ( userAnswer > myWeight ) {
      alert( 'Too high.' );
    }
    if ( userAnswer < myWeight ) {
      alert( 'Too low.' );
    }
    if ( userAnswer === myWeight ) {
      alert( 'Nice! Got it.' );
      break;
    }
  }
}
guessWeight();