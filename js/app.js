'use strict';

// var attempts = 0;
// var ageGuess1 = prompt( 'Do you think I am older than 20? Please answer \'yes\' or \'no\'.' ).toLowerCase();

// // while ( flag === 'false' && attempts < 5 ) {
// //   if ( ageGuess1 === 'yes' ) {
// //     alert( 'Nice! You\'re right. Let\'s keep going.');
// //   } else if ( ageGuess1 === 'no' ) {

// //     flag = false;
// //     attempts++;
// //   } else {
// //     alert( 'Please answer \'yes\' or \'no\'.');
// //   }
// // }

do {
  var ageGuess1 = prompt( 'Do you think I am older than 20? Please answer \'yes\' or \'no\'.' ).toLowerCase();
  if ( ageGuess1 === 'yes' ) {
    alert( 'Correct! Let\'s keep going.' );
    break;
  } else if ( ageGuess1 === 'no' ) {
    alert( 'Ah, nope! Let\'s start over, shall we?' );
    var ageCorrect = false;
  } else {
    alert( 'Please answer \'yes\' or \'no\'.' );
  }
} while ( ageCorrect === false );