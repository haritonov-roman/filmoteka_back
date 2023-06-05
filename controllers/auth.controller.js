// const db = require('../db');
//
// class AuthController {
//   async registration(req, res) {
//     const { email, password } = req.body;
//
//     const newUser = await db.query(
//         'INSERT INTO users (email, password, enabled) VALUES ($1, $2, true) RETURNING *',
//         [email, password]
//     );
//
//     res.status(200).json(newUser.rows[0]);
//   }
//
//   async
//
//   async getUsers(req, res) {
//     const users = await db.query('SELECT * FROM users');
//
//     res.status(200).json(users.rows);
//   }
//
//   async getOneUser(req, res) {
//     const id = req.params.id;
//
//     const user = await db.query(
//         'SELECT * FROM users WHERE user_id = $1',
//         [id]
//     );
//
//     res.status(200).json(user.rows[0]);
//   }
// }
//
// module.exports = new UserController();