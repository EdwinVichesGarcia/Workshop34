import { client } from './database.js';

export const seedCustomers = async () => {
    try {

        await client.query(`
            DROP TABLE IF EXISTS customers;
            CREATE TABLE IF NOT EXISTS customers (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );

            INSERT INTO customers (name)
            VALUES ('Edwin'), ('Tyler'), ('Alberto');
            `)
    } catch (e) {
        console.error('Failed to create customers Database!');
        console.error(e);
    }
};



export const getCustomers = async () => {
    try {

        const { rows: customers } = await client.query(`
            SELECT * FROM customers;
            `);

        return customers;

    } catch (e) {
        console.error('Failed to get customers!');
        console.error(e);
    }
};