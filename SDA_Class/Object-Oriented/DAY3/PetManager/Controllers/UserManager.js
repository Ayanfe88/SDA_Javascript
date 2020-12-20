class UserManager {
    users = [];
    constructor() {
    }

    addUser = (user) => {
        this.users.push(user)
    }

    findUserByUsernameAndPassword(username, password){
        return this.users.find((user) =>
            user.password === password && user.username === username)
    }

    deleteUser(userId) {
        this.user = this.users.filter(function (user) {
            if (user.id !== userId){
                return user
            }
        })
    }
}
