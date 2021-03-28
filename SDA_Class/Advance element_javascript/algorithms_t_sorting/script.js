//algorithms task

//sample array to test your program
var arr5 = [ 1, 5, 4, 4, 2];
var arr10 = [ 3, 9, 1, 0, 4, 2, 5, 6, 8, 5];
var arr50 = [ 2, 9, 4, 6, 2, 2, 9, 4, 3, 7, 2, 4, 3, 3, 9, 3, 6, 5, 0, 4, 0, 2, 3, 3, 9, 0, 8, 3, 0, 8, 1, 1, 8, 0, 3, 9, 1, 7, 9, 5, 2, 3, 1, 0, 0, 8, 5, 1, 9, 6];

var sorted = [];

//TODO your sorting method
for (var j = 0; j < arr5.length; j++) 
    sorted.push({'name': arr5[j], 'age': arr10[j], arr50[j] });
    
    sorted.sort(function(a, b) {
        return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1));
        //Sort could be modified to, for example, sort on the age 
        // if the name is the same.
    });