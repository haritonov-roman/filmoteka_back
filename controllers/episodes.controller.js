const db = require('../db');

// TODO: проверка типов: favorites
// TODO: обработка ошибки если нет записи по id

class EpisodesController {
  async createEpisode(req, res) {
    const { user_movie_id, season, watched } = req.body;

    const newEpisode = await db.query(
        'INSERT INTO user_movie_episodes (user_movie_id, season, watched) VALUES ($1, $2, $3) RETURNING *',
        [user_movie_id, season, watched]
    );

    res.status(200).json(newEpisode.rows[0]);
  }

  async getEpisode(req, res) {
    const episodes = await db.query('SELECT * FROM user_movie_episodes');

    res.status(200).json(episodes.rows)
  }

  async getOneEpisode(req, res) {
    const id = req.params.id;

    const episode = await db.query(
        'SELECT * FROM user_movie_episodes WHERE user_movie_episode_id = $1',
        [id]
    );

    res.status(200).json(episode.rows[0]);
  }

  async updateEpisode(req, res) {
    const { id, watched } = req.body;

    const updatedEpisode = await db.query(
        'UPDATE user_movie_episodes SET watched = $2 WHERE user_movie_episode_id = $1 RETURNING *',
        [id, watched]
    );

    res.status(200).json(updatedEpisode.rows[0]);
  }

  async deleteEpisode(req, res) {
    const id = req.params.id;

    await db.query(
        'DELETE FROM user_movie_episodes WHERE user_movie_episode_id = $1',
        [id]
    );

    res.status(200).json('done');
  }
}

module.exports = new EpisodesController();