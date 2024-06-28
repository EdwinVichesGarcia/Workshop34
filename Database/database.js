import pg from 'pg';

const { Client } = pg;

const DATABASE_URL = process.env.DATABASE_URL || `postgres://localhost:5432/acme_reservation_planner`;

export const client = new Client(DATABASE_URL);


export const connectDataBase = async () => {
    try {   
        await client.connect();

        console.log(`Successfully connected to Database ${DATABASE_URL}`);

    } catch (e) {
        console.error(`Failed to connect to  Database:${DATABASE_URL}`);
        console.error(e);
    };
};