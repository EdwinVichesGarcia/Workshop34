import express from 'express';
import { connectDataBase } from './Database/database.js';
import apiRouter from './api/api.js';


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', apiRouter);

const startApp = async () => {
    try {

        await connectDataBase(process.env.SEED ? true : false);
        app.listen(PORT, () => {
            console.log(`Server is now listening to PORT ${PORT}`);
        });

    } catch (e) {
        console.error('Failed to start application!');
        console.error(e);
    }
};

startApp();