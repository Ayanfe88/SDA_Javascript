class User {
    constructor(name, location, username, password) {
        this.id = generateRandomID();
        this.name = name;
        this.location = location;
        this.username = username;
        this.password = btoa(password);
    }
}
