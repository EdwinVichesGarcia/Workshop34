import { client, connectDataBase } from "./database.js";
import { seedCustomers, getCustomers } from "./customers.js";
import { seedRestaurants, getRestaurants } from "./restaurants.js";
import { seedReservations, createReservations, getReservations } from "./reservation.js";


const initDataBase = async (seed = false) => {
    try {

        await connectDataBase();

        if (seed) {
            await client.query(`
                DROP TABLE IF EXISTS reservation;
                `);

            await seedCustomers();
            await seedRestaurants();
            await seedReservations();

            console.log('Seeded Successfully!');
        }
    } catch (e) {
        console.error('Failed to Initiate Database!',e);
         } finally {
            client.end();
         }
}


export const getMethods = {
    customers: {
        getCustomers,
    },

    restaurants: {
        getRestaurants,
    },

    reservation: {
        createReservations,
        getReservations,
    },
};

// initDataBase(true);