`use strict`;

function questions() {
  var count = 0
  var userName = prompt('Hello! What is your name? ');
  document.write('Welcome, ' + userName)
  console.log('what is the user name?')
  var userDay = prompt('Hello! Are you having a good day today? y/n');
  if (userDay.toLowerCase() == 'y') {
    document.write('Yay! So glad to hear you are having a good day!');
  } else {
    document.write('I am sorry to hear that!')
  }

  var userSun = prompt('Is it sunny where you are?');
  if (userSun.toLowerCase() == 'y') {
    document.write('Lucky!!! It is rainy here in Seattle.');
  } else {
    document.write('It is not sunny here, either.');
  }

  var userWarm = prompt('Do you like warm weather? ');
  if (userSun.toLowerCase() == 'y') {
    document.write('Same here! I love warm, sunny weather!');
  } else {
    document.write('Ah, more a cool weather person. n-ice');
  }

  var userSnow = prompt('Or, do you prefer the cold?');
  if (userSun.toLowerCase() == 'y') {
    document.write('Good for you, I like the beach');
  } else {
    document.write('SAME');
  }

  var userRain = prompt('Do you like the rain, ' + userName + '?');
  if (userRain.toLowerCase() == 'y') {
    document.write('Seattle is perfect for you!');
  } else {
    document.write('same, ' + userName + '! dreaming of a sunny beach rn');
  }

  for (var i = 0; i < 4; i++) {
    var userNumber = prompt(userName + ' please guess a number between 1-10.');
    userNumber = parseInt(userNumber)
    if (i === 3 && userNumber !== 5) {
      alert('Good guessing, ' + userName + ', but the correct answer was 5!')
    }
    else if (userNumber === 5) {
      alert('You got it, ' + userName + '!!!! Great guessing!');
      count++
      break;
    }
    else if (userNumber < 5) {
      alert('Too low! Please guess again!')
    }
    else if (userNumber > 5) {
      alert('Too high! Please guess again!')
    }
  }

  var travelArray = ['kauai', 'cuba'];
  var flag = true;
  for (var i = 0; i < 6; i++) {

    var userTravel = prompt(userName + ', which places do I like to travel?');
    for (var j = 0; j < travelArray.length; j++) {
      if (userTravel.toLowerCase() === travelArray[j]) {
        alert('Great Job, ' + userName + '!!')
        flag = false
        break;
      }
    }
    if (flag === false) {
      break;
    }
    if (i === 5 && flag === true) {
      alert('The correct answers were Cuba and Kauai, good luck next time!')
    } else { alert('Guess again!') }
  }
  alert('Congrats! You got ' + count + ' correct!');
}
questions();
