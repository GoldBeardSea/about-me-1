'use strict';

do {
  var ageGuess1 = prompt( 'Do you think I am older than 20?' ).toLowerCase();
  if ( ageGuess1 === 'yes' ) {
    alert( 'Good start! Let\'s keep going.' );
    break;
  } else if ( ageGuess1 === 'no' ) {
    alert( 'Ah, nope! Let\'s start over, shall we?' );
    var ageCorrect1 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
    ageCorrect1 = false;
  }
} while ( ageCorrect1 === false );

do {
  var ageGuess2 = prompt( 'Do you think I am older than 25?' ).toLowerCase();
  if ( ageGuess2 === 'yes' ) {
    alert( 'Nice! Doing great. Keep going, brainiac!' );
    break;
  } else if ( ageGuess2 === 'no' ) {
    alert( 'Ah, unlucky. Back it up, brainiac.' );
    var ageCorrect2 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
    ageCorrect2 = false;
  }
} while ( ageCorrect2 === false );

do {
  var ageGuess3 = prompt( 'Do you think I am older than 30?' ).toLowerCase();
  if ( ageGuess3 === 'yes' ) {
    alert( 'Yes! Hey, you\'re getting the hang of this.' );
    break;
  } else if ( ageGuess3 === 'no' ) {
    alert( 'Oof. Try again, buddy.' );
    var ageCorrect3 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
    ageCorrect3 = false;
  }
} while ( ageCorrect3 === false );

do {
  var ageGuess4 = prompt( 'Do you think I am older than 35?' ).toLowerCase();
  if ( ageGuess4 === 'yes' ) {
    alert( 'Yes! Hey, you\'re getting the hang of this.' );
    break;
  } else if ( ageGuess4 === 'no' ) {
    alert( 'Oof. Try again, buddy.' );
    var ageCorrect4 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
    ageCorrect4 = false;
  }
} while ( ageCorrect4 === false );