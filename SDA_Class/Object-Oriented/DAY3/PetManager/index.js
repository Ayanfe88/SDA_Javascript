
const userManager = new UserManager();

const register = () => {
    const username = document.querySelector('#register_username').value
    const location = document.querySelector('#register_location').value
    const name = document.querySelector('#register_name').value
    const password = document.querySelector('#register_password').value

    userManager.addUser(
        new User(name, location, username, password)
    );
    alert("Registration successful")
}

const login = ()=> {
    const username = document.querySelector('#login_username').value
    const password = document.querySelector('#login_password').value

    const existingUser = userManager
        .findUserByUsernameAndPassword(username, btoa(password))

    if(!existingUser){
        alert("User does not exist")
    }else {
        alert(`Welcome back ${existingUser.name} !`)
        displayProfile(existingUser);
    }

}

const displayProfile = (user) => {

    document.querySelector("#profileDisplayArea").innerHTML = `
        <tr><td>Id</td><td>${user.id}</td></tr>
        <tr><td>Name</td><td>${user.name}</td></tr>
        <tr><td>Username</td><td>${user.username}</td></tr>
        <tr><td>Location</td><td>${user.location}</td></tr>
        <tr>
            <td>Not interested?</td>
            <td><button onclick="deleteProfile(${user.id})">Delete Profile</button></td>
        </tr>
    `

}

const deleteProfile = (userId) => {
    userManager.deleteUser(userId);
    alert("user with id: "+ userId + " has been deleted")
}
