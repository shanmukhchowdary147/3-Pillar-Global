// Day 2 Exercise - Level 1
// Completed
 
 var challenge = '30 Days Of JavaScript';

console.log(challenge);

console.log(challenge.length);

challenge = challenge.toUpperCase();
console.log(challenge);

challenge = challenge.toLowerCase();
console.log(challenge);

challenge = challenge.substr(3);
console.log(challenge);

challenge = '30 Days Of JavaScript';
challenge = challenge.substr(0,2);
console.log(challenge);

challenge = '30 Days Of JavaScript';
console.log(challenge.includes('Script'));

challenge = challenge.split(' ');
console.log(challenge);

var test = 'Facebook , Google , Microsoft , Apple , IBM , Oracle , Amazon';

test = test.split(' , ');
console.log(test);

challenge = '30 Days Of JavaScript';
console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

test = 'You cannot end a sentence with because because because is a conjunction';

console.log(test.lastIndexOf('because'));

console.log(test.search('because'));

console.log(challenge.trim());

console.log(challenge.startsWith('3'));

console.log(challenge.endsWith('t'));

console.log(challenge.match('a'));

console.log(challenge.repeat(2));