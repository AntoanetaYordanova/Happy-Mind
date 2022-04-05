let user = {};

function setUser(newUser) {
    user = newUser;
}

function getUser(){
    return user;
}

function clearUser() {
    user = {};
}

module.exports = {
    setUser,
    getUser,
    clearUser
}