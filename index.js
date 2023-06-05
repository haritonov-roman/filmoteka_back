const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const usersRouter = require('./routes/users.routes');
const moviesRouter = require('./routes/movies.routes');
const episodesRouter = require('./routes/episodes.routes');

app.use('/api', usersRouter);
app.use('/api', moviesRouter);
app.use('/api', episodesRouter);

app.listen(port, () => {
  console.log(`Example app listerning on port ${port}`);
});
