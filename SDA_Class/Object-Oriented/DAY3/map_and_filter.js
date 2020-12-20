let users = [
    {id: 34, name: 'john snow', location: 'Tallinn', username: 'johnjohny85868', favouriteSnack: 'chocolates'},
    {id: 12, name: 'Mariann', location: 'Tartu', username: 'Mariann27357', favouriteSnack: 'Pepsi cola'},
    {id: 56, name: 'Aleks', location: 'Parnu', username: 'Aleks2345', favouriteSnack: 'popcorn'},
    {id: 25, name: 'john janet', location: 'Narva', username: 'johnjanet987', favouriteSnack: 'chocolates'},
    {id: 42, name: 'Danila', location: 'Paldiski', username: 'Danila46', favouriteSnack: 'chips'},
    {id: 39, name: 'Ivan', location: 'Sillamae', username: 'Ivan123', favouriteSnack: 'Cashew nuts'},
    {id: 26, name: 'Femi', location: 'Keila', username: 'Femi87', favouriteSnack: 'rice'}
]
const deleteUser = (userId) => {
    /*this function DOES NOT automatically updates the original array, if you need
    to update the original, you have to do it manually*/
    const newUsers = users.filter(
        (user) => {
            if(user.id !== userId) return user;
        }
    )
    users = newUsers;
}
console.table(users)
deleteUser(25)
console.table(users)
const updateUser = (userToUpdate)=> {
    console.log(userToUpdate)
    /*this function automatically updates the original array, you do not have to do it manually*/
    users.map((user) => {
        if(user.id === userToUpdate.id){
            // using destructuring
            //user = {...userToUpdate}
            // we can do it this way as well; but above is faster if you dont have any data that needs to be secured
            user.username = userToUpdate.username;
            user.location = userToUpdate.location;
            user.favouriteSnack = userToUpdate.favouriteSnack;
            // loop through properties and update automatically
            /*for(let property in userToUpdate){
                user[property] = userToUpdate[property]
           }*/
        }
        return user;
    })
}
loggedInUser = {...users[4]};
loggedInUser.location = 'Tallinn';
loggedInUser.favouriteSnack = 'cheetos';
console.table(users)
updateUser(loggedInUser)
console.table(users)
const filterUsersByLocation = (searchLocation) => {
    return users.filter((currentUser)=> {
        if(currentUser.location.toLowerCase() === searchLocation.toLowerCase()) return currentUser
    })
}
console.table(filterUsersByLocation('tallinn'))
/*without toLowerCase*/
originalLocation = "Tallinn"
searchLocation = "TALLINN"
/*with toLowerCase*/
original = 'tallinn'
search = 'tallinn'
/* CRUD
*
* create
* read
* update
* delete*/