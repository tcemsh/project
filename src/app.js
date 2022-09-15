import express from 'express';
import colors from 'colors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import homeRouter from './routes/home.js';
import authRouter from './routes/auth.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/auth', authRouter);

export default app;
