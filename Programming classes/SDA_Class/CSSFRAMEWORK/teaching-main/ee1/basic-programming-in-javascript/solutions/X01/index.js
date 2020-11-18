var people = [
  {
    first_name: 'Clifford',
    last_name: 'Hasloch',
    gender: 'Male',
    age: 28,
    isWearingMask: false,
  },
  {
    first_name: 'Geralda',
    last_name: 'Soldan',
    gender: 'Female',
    age: 19,
    isWearingMask: false,
  },
  {
    first_name: 'Ianthe',
    last_name: 'Collidge',
    gender: 'Female',
    age: 24,
    isWearingMask: false,
  },
  {
    first_name: 'Radcliffe',
    last_name: 'Revill',
    gender: 'Male',
    age: 21,
    isWearingMask: true,
  },
  {
    first_name: 'Chane',
    last_name: 'Hearle',
    gender: 'Male',
    age: 15,
    isWearingMask: true,
  },
  {
    first_name: 'Yuma',
    last_name: 'Borsi',
    gender: 'Male',
    age: 20,
    isWearingMask: false,
  },
  {
    first_name: 'Pinchas',
    last_name: 'Duddin',
    gender: 'Male',
    age: 19,
    isWearingMask: true,
  },
  {
    first_name: 'Constantia',
    last_name: 'Enderle',
    gender: 'Female',
    age: 22,
    isWearingMask: true,
  },
  {
    first_name: 'Kerwinn',
    last_name: 'Gorhardt',
    gender: 'Male',
    age: 18,
    isWearingMask: true,
  },
  {
    first_name: 'Ludovico',
    last_name: 'Orenzel',
    gender: 'Male',
    age: 31,
    isWearingMask: true,
  },
];

function getPersonName() {
  var fullname = people[i].first_name + ' ' + people[i].last_name;
  return fullname;
}

var attendingArray = [];
for (var i = 0; i < people.length; i++) {
  var fullname = getPersonName(people[i]);
  attendingArray.push(fullname);
}
console.log(attendingArray);

var restrictedAttendingArray = [];
for (var i = 0; i < people.length; i++) {
  var personAge = people[i].age;
  if (personAge >= 21) {
    restrictedAttendingArray.push(getPersonName(people[i]));
  }
}
console.log(restrictedAttendingArray);

var males = '';
var females = '';
var length = people.length;
var i = 0;
while (i < length) {
  if (people[i].gender === 'Male') {
    males += getPersonName(people[i]) + ', ';
  } else {
    females += getPersonName(people[i]) + ', ';
  }
  i++;
}
console.log(males);
console.log(females);

let luckyAttending = [];
for (var i = 0; i < people.length; i++) {
  var randomChance = Math.random();
  if (randomChance >= 0.5) {
    luckyAttending.push(getPersonName(people[i]));
  }
}
console.log(luckyAttending);

let unluckyLetterAttending = [];
for (var i = 0; i < people.length; i++) {
  var firstNameLetter = people[i].first_name.substring(0, 1);
  switch (firstNameLetter) {
    case 'C':
      alert(getPersonName(people[i]) + ' name started with C');
      break;
    case 'G':
      alert(getPersonName(people[i]) + ' name started with G');
      break;
    case 'F':
      alert(getPersonName(people[i]) + ' name started with F');
      break;
    case 'L':
      alert(getPersonName(people[i]) + ' name started with L');
      break;
    case 'X':
      alert(getPersonName(people[i]) + ' name started with X');
      break;
    case 'W':
      alert(getPersonName(people[i]) + ' name started with W');
      break;
    default:
      break;
  }
}

/**
 * This is an array of objects of people who would like to go to an event.
 * Make an array of people attending an event, both first name and last name
 * and print their last and first name into console.
 *
 * Extra:
 * #1 The event they would like to go to is an 21+ event.
 * So everyone aged less than 21 cannot get inside.
 *
 * #2 Print out all males or females that tried to go to the event as a string.
 * Use a while loop
 *
 * #3 For current safety reasons we must randomly give every person a 50% chance of getting in.
 * The 21+ restrictions no longer apply.
 *
 * #4 If a persons first name starts with C, G, F, L, X or W they sadly cannot come in to the event.
 * Write the alert/console message for which letter they cannot be admitted for.
 *
 *
 *  */
