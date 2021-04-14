import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT || '3333', () => {
  console.log('> Server started')
})
