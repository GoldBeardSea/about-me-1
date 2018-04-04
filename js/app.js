'use strict';

do {
  var ageGuess1 = prompt( 'Do you think I am older than 20? Please answer \'yes\' or \'no\'.' ).toLowerCase();
  if ( ageGuess1 === 'yes' ) {
    alert( 'Good start! Let\'s keep going.' );
    break;
  } else if ( ageGuess1 === 'no' ) {
    alert( 'Ah, nope! Let\'s start over, shall we?' );
    var ageCorrect1 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
  }
} while ( ageCorrect1 === false );

do {
  var ageGuess2 = prompt( 'Do you think I am older than 25? Please answer \'yes\' or \'no\'.' ).toLowerCase();
  if ( ageGuess2 === 'yes' ) {
    alert( 'Nice! Doing great. Keep going, brainiac!' );
    break;
  } else if ( ageGuess2 === 'no' ) {
    alert( 'Ah, unlucky. Back it up, brainiac.' );
    var ageCorrect2 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
  }
} while ( ageCorrect2 === false );

do {
  var ageGuess3 = prompt( 'Do you think I am older than 30? Please answer \'yes\' or \'no\'.' ).toLowerCase();
  if ( ageGuess3 === 'yes' ) {
    alert( 'Yes! Hey, you\'re getting the hang of this.' );
    break;
  } else if ( ageGuess3 === 'no' ) {
    alert( 'Oof. Try again, buddy.' );
    var ageCorrect3 = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
  }
} while ( ageCorrect3 === false );