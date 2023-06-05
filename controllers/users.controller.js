const db = require('../db');

// TODO: обработка ошибки если нет записи по id

class UsersController {
  async createUser(req, res) {
    const { email, password, user_name, avatar } = req.body;

    const newUser = await db.query(
      'INSERT INTO users (email, password, user_name, avatar, enabled) VALUES ($1, $2, $3, $4, true) RETURNING *',
      [email, password, user_name, avatar]
    );

    res.status(200).json(newUser.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM users');

    res.status(200).json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;

    const user = await db.query(
      'SELECT * FROM users WHERE user_id = $1',
      [id]
    );

    res.status(200).json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, user_name } = req.body;

    const updatedUser = await db.query(
      'UPDATE users SET user_name = $2 WHERE user_id = $1 RETURNING *',
      [id, user_name]
    );
    
    res.status(200).json(updatedUser.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;

    await db.query(
      'DELETE FROM users WHERE user_id = $1',
      [id]
    )

    res.status(200).json('done');
  }
}

module.exports = new UsersController();