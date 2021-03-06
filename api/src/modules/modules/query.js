import db from "../../setup/database";

const Query = {
  getAll: () => {
    let sqlQuery = "SELECT * FROM modules";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },

  getById: id => {
    let sqlQuery = `SELECT * FROM modules WHERE id=?`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
};

export default Query;
