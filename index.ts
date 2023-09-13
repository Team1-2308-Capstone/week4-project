import express from 'express';
import config from './utils/config';
const app = express();
const mongoose = require('mongoose');
import pgBin from './models/pgbin';
import sequelize from './utils/sequelize';

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
    return pgBin.sync({ alter: true });
  })
  .then(() => {
    console.log('All PostgreSQL tables have been successfully created.');
  })
  .catch((error) => {
    console.error('Unable to connect to PostgreSQL:', error);
  });

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

app.get('/test', async (req, res) => {
  let test = {
    binId: "66",
    createdAt: new Date(),
    lastRequest: new Date(),
  }
  
  const newBin = new pgBin(test)
  await newBin.save()
})

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
});

