import { client } from './database.js';

export const seedReservations = async () => {
    try {

        await client.query(`
            DROP TABLE IF EXISTS reservation;
            CREATE TABLE IF NOT EXISTS reservation (
                id SERIAL PRIMARY KEY,
                date TIMESTAMP DEFAULT NOW(),
                party_count INTEGER NOT NULL,
                customer_id INTEGER REFERENCES customers(id) NOT NULL,
                restaurant_id INTEGER REFERENCES restaurants(id) NOT NULL

            );

         `);
    } catch (e) {
        console.error('Failed to create reservation Database!');
        console.error(e);
    }
};



export const createReservations = async ({ customersId, restaurantsId }) => {
    try {
        const { rows } = await client.query(`
            INSERT INTO reservation (customer_id, restaurant_id)
            VALUES ($1, $2)
            RETURNING *;
            `, [customersId, restaurantsId])
    } catch (e) {
        console.error('Fail to create Reservation Database!');
        console.error(e);
    }
};



export const getReservations = async () => {
    try {
        const { rows: reservation } = await client.query(`
            SELECT reservation.date, reservation.party_count
            FROM reservation
            JOIN customers ON reservation.customer_id = customers.id
            JOIN restaurants ON reservation.restaurant_id = restaurants.id
            `)

        return reservation;
    } catch (e) {
        console.error('Failed to get Reservation!');
        console.error(e);
    }
};