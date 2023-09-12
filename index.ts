import express from 'express';
import config from './utils/config';
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.send('this might be working');
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
});
