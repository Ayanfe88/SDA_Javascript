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
// console.log(people);
//print their last and first name into console
// for (var i = 0; i < 10; i++) {
//     var fullName = people[i].first_name + "  "+ people[i].last_name ;
//     console.log(fullName);
// }
people.forEach(function(val,i) {
    var fullName = val.first_name + "  "+ val.last_name ; 
    //console.log(fullName);
    
});

 var name;
 people.forEach(function(val,i) {
    if (val.age < 21) {
        name = val.first_name + "  "+ val.last_name ; 
        var data = name + " "+ val.age;
        //console.log("You are not allowed in the party:" + data);
   }
   
  //Make a new array where you put the first name and last name who could get into the party. 
 });
 var newPeople= [];
 people.forEach(function(val,i){
    if (val.age > 21) {
        name = val.first_name + "  "+ val.last_name ; 
        data = name + " "+ val.age;
        //console.log("You are allowed in the party:" + data);
        newPeople.push(data);
   } 
   
 })
 //console.log(newPeople);

 //Print out each persons name who is not wearing a mask
 people.forEach(function(val,i){
    if (val.isWearingMask != true) {
        name = val.first_name + "  "+ val.last_name;  
        data = name + " "+ val.isWearingMask;
        //console.log(" " +" " + data);
    }
    people.isWearingMask = true;
 })

 
 people.isWearingMask = true;

 
