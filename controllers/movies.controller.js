const db = require('../db');

// TODO: проверка типов: favorites
// TODO: обработка ошибки если нет записи по id

class MoviesController {
  async createMovie(req, res) {
    const { user_id, kp_id, favorites } = req.body;
    const watch_value = 50;
    const date_of_last_watch = '2023-06-05 19:15:00+07';

    const newMovie = await db.query(
      'INSERT INTO user_movies (user_id, kp_id, favorites, watch_value, date_of_last_watch, enabled) VALUES ($1, $2, $3, $4, $5, false) RETURNING *',
      [user_id, kp_id, favorites, watch_value, date_of_last_watch]
    );

    res.status(200).json(newMovie.rows[0]);
  }

  async getMovie(req, res) {
    const movies = await db.query('SELECT * FROM user_movies');

    res.status(200).json(movies.rows)
  }

  async getOneMovie(req, res) {
    const id = req.params.id;

    const movie = await db.query(
      'SELECT * FROM user_movies WHERE user_movie_id = $1',
      [id]
    );

    res.status(200).json(movie.rows[0]);
  }

  async updateMovie(req, res) {
    const { id, favorites } = req.body;

    const updatedMovie = await db.query(
      'UPDATE user_movies SET favorites = $2 WHERE user_movie_id = $1 RETURNING *',
      [id, favorites]
    );

    res.status(200).json(updatedMovie.rows[0]);
  }

  async deleteMovie(req, res) {
    const id = req.params.id;

    await db.query(
      'DELETE FROM user_movies WHERE user_movie_id = $1',
      [id]
    );

    res.status(200).json('done');
  }
}

module.exports = new MoviesController();