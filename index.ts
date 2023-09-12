import express from 'express';
import config from './utils/config';
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error: Error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.get('/', (_, res) => {
  res.send('this might be working');
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
});


/*
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });
*/



// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
