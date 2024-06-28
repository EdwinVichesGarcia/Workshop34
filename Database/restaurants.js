import { client } from './database.js';

export const seedRestaurants = async () => {
    try {
        console.log('seeding restaurant');
        await client.query(`
            DROP TABLE IF EXISTS restaurants;
            CREATE TABLE IF NOT EXISTS restaurants (
                id SERIAL PRIMARY KEY,
                restaurant_name VARCHAR(255) NOT NULL
            );

            INSERT INTO restaurants (restaurant_name)
            VALUES ('AYCE Korean BBQ'), 
            ('Brazilian Steak House'), 
            ('Texas Roadhouse');
         `);
         console.log('done seeding!');
    } catch (e) {
        console.error('Failed to create restaurants Database!');
        console.error(e);
    }
};


export const getRestaurants = async () => {
    try {

        const { rows: restaurants } = await client.query(`
            SELECT * FROM restaurants;
            `);

        return restaurants;

    } catch (e) {
        console.error('Failed to get restaurants!');
        console.error(e);
    }
};