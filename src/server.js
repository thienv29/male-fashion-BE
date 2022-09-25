import express from 'express';
import routes from './routes/index.js';
import mongoose from 'mongoose';
import { DB_LINK, PORT } from './config/index.js';
import http from 'http';
import cookiePaser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'

const app = express();

mongoose
    .connect(DB_LINK)
    .then(() => {
        console.info('Mongodb is connected');
        startServer();
    })
    .catch((error) => {
        console.error(`Unable to connect: ${error}`);
    });

const startServer = () => {
    app.use(cors({
        origin: "http://localhost:3200",
        credentials: true,
    }))
    app.use(cookiePaser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(morgan('combined'));


    app.use('/api/v1', routes);

    /** Healthcheck */
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        console.error(error);

        res.status(404).json({
            message: error.message,
        });
    });

    http.createServer(app).listen(PORT, () =>
        console.info(`Server is running on port ${PORT}`),
    );
};
