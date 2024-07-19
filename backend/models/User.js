let users = [];

class User {
  constructor(id, username, password, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static addUser(user) {
    users.push(user);
  }

  static getUserByUsername(username) {
    return users.find(user => user.username === username);
  }

  static getUserById(id) {
    return users.find(user => user.id === id);
  }

  static getAllUsers() {
    return users;
  }
}

module.exports=User;
