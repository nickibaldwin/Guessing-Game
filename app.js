`use strict`;

var userName =prompt('Hello! What is your name? ');
document.write('Welcome, ' + userName)
console.log('what is the user name?')

var userDay =prompt('Hello! Are you having a good day today? y/n') ;
if(userDay.toLowerCase() == 'y') {
  document.write('Yay! So glad to hear you are having a good day!');
} else {
  document.write('I am sorry to hear that!')
}
console.log('The user is having a good day' + userDay )

var userSun =prompt('Is it sunny where you are?');
if(userSun.toLowerCase() == 'y'){
  document.write('Lucky!!! It is rainy here in Seattle.');
} else {
  document.write('It is not sunny here, either.');
}
console.log('Is it sunny?' + userSun )

var userWarm =prompt('Do you like warm weather? ');
if(userSun.toLowerCase() == 'y'){
  document.write('Same here! I love warm, sunny weather!');
} else {
  document.write('Ah, more a cool weather person. n-ice');
}
console.log('Does user like warm weather?')

var userSnow =prompt('Or, do you prefer the cold?');
if(userSun.toLowerCase() == 'y'){
  document.write('Good for you, I like the beach');
} else {
  document.write('SAME');
}
console.log('Does user like cold?')

var userRain =prompt('Do you like the rain, ' + userName + '?');
if(userRain.toLowerCase() == 'y'){
  document.write('Seattle is perfect for you!');
} else {
  document.write('same, ' + userName + '! dreaming of a sunny beach rn');
}
console.log('Does user like rain?')
