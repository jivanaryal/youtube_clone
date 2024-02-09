const db = require("../config/db");
class Shorts {
  constructor(
    shortimage,

    title,
    description,
    chname,
    like_count,
    dislike_count
  ) {
    this.shortimage = shortimage;
    this.title = title;
    this.description = description;
    this.chname = chname;
    this.like_count = like_count;
    this.dislike_count = dislike_count;
  }
  createShort() {
    let query = `INSERT INTO shorts(shortimage,title,description,chname) VALUES ('${this.shortimage}','${this.title}','${this.description}','${this.chname}')`;

    return db.execute(query);
  }
  static getShort() {
    let query = `select * from shorts`;
    return db.execute(query);
  }
  static deleteShort(id) {
    let query = `delete from shorts where idshorts= ${id}`;
    return db.execute(query);
  }
  updateShort(id) {
    let query = `update shorts set shortimage= '${this.shortimage}',title='${this.title}',description='${this.description}',chname='${this.chname}' where idshorts = ${id}`;
    return db.execute(query);
  }
  updateLikeCount(id) {
    let query = `update shorts set like_count = '${
      this.like_count + 1
    }' where idshorts = ${id}`;
    return db.execute(query);
  }
  updateDisLikeCount(id) {
    let query = `update shorts set dislike_count='${
      this.dislike_count + 1
    }' where idshorts=${id}`;
    return db.execute(query);
  }
  static getLikesByID(id) {
    let query = `select like_count from shorts where idshorts='${id}'`;
    return db.execute(query);
  }
  static getDislikesByID(id) {
    let query = `select dislike_count from shorts where idshorts='${id}'`;
    return db.execute(query);
  }
}
module.exports = Shorts;
