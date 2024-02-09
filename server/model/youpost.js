const db = require("../config/db");
class Ypost {
  constructor(thumbimage, profile, title, description, chname, category) {
    this.thumbimage = thumbimage;
    this.profile = profile;
    this.title = title;
    this.description = description;
    this.chname = chname;
    this.category = category;
  }
  createYpost() {
    let query = `insert into ypost(thumbimage,profile,title,description,chname,category) values ('${this.thumbimage}','${this.profile}','${this.title}','${this.description}','${this.chname}','${this.category}')`;
    return db.execute(query);
  }
  static getYppost() {
    let query = ` select * from ypost`;
    return db.execute(query);
  }
  static getYpostbyId(id) {
    let query = `select * from ypost where idypost = ${id}`;
    return db.execute(query);
  }
  static deleteYpost(id) {
    let query = `delete from ypost where idypost = ${id}`;
    return db.execute(query);
  }
  updateYpost(id) {
    let query = `UPDATE ypost SET thumbimage = '${this.thumbimage}' , profile='${this.profile}' , title = '${this.title}' , description ='${this.description}' , chname='${this.chname}', category='${this.category}' WHERE idypost = ${id} `;
    return db.execute(query);
  }
}
module.exports = Ypost;
