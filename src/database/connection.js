const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const connection = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'))

// connection.serialize(() => {

//   connection.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEST,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `);

//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//   ) VALUES (?, ?, ?, ?, ?, ? ,?);
// `;
//   const values = [
//     "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, jardim América",
//     "Nº 260",
//     "Rio do Sul",
//     "Santa Catarina",
//     "Papéis e Papelão"
//   ];

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('cadastrado com sucesso');
//     console.log(this);
//   }

//   connection.run(query, values, afterInsertData);

// connection.all('SELECT * FROM places', function (err, rows) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(rows);
// })

// connection.run('DELETE FROM places WHERE id = ?', [4], function (err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('Registro deletado com sucesso')
// });

// });

module.exports = connection;