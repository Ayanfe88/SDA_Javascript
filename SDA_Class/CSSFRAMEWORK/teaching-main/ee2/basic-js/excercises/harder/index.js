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
console.log(people);

/**
 * This is an array of objects of people who would like to go to an event.
 * Make an array of people attending an event, both first name and last name
 * and print their last and first name into console.
 * ! Try making a function that accepts an object as an argument and returns the first and last name.
 *
 * Extra:
 * #1 The event they would like to go to is an 21+ event.
 * So everyone aged less than 21 cannot get inside.
 * Make a new array where you put the first name and last name who could get into the party.
 *
 * #3 Because of COVID19 going around everyone who wants to go to the event will have to wear a mask.
 * Everyone who is not wearing a mask can not be accepted into the event.
 * Print out each persons name who is not wearing a mask.
 * ! Try giving each person a mask (If they are not wearing a mask, change their attribute from false to true).
 *
 * #4 For current safety reasons we must randomly give every person a 50% chance of getting in.
 * Assign each person a different random chance of getting in and print out their first and last name.
 *
 * #5 If a persons first name starts with C, G, F, L, X or W they sadly cannot come in to the event.
 * Write the alert/console message for which letter they cannot be admitted for and their first and last name.
 *
 *  */
