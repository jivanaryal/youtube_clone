const db = require("../config/db");
class Login {
  constructor(email, fullname, password) {
    this.email = email;
    this.fullname = fullname;
    this.password = password;
  }
  createRegister() {
    let query = `insert into userlogin(email,fullname,password) values('${this.email}','${this.fullname}','${this.password}')`;
    return db.execute(query);
  }
  static findAll() {
    let query = `select * from userlogin`;
    return db.execute(query);
  }

  static findById(id) {
    let query = `select * from userlogin where iduserlogin=${id}`;
    return db.execute(query);
  }
  updateUser(id) {
    let query = `update userlogin set email='${this.email}', fullname='${this.fullname}', password='${this.password}' where iduserlogin=${id}`;
    return db.execute(query);
  }
  static deleteUser(id) {
    let query = `delete from userlogin where iduserlogin=${id}`;
    return db.execute(query);
  }
  static findUser(email) {
    let query = `select * from userlogin where email='${email}'`;
    return db.execute(query);
  }
}
module.exports = Login;
