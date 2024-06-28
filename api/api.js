import { Route, request, response } from 'express';
import { getMethods } from '../Database/index.js';
import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/customers', async (request, response, next) => {
    try {
        const customers = await getMethods.customers.getCustomers();
        //test commmit
        response.send({ customers });

    } catch (e) {
        next(e);
    }
});


apiRouter.get('/restaurants', async (request, response, next) => {
    try {
        const restaurants = await getMethods.restaurants.getRestaurants();

        response.send({ restaurants });

    } catch (e) {
        next(e);
    }
});


apiRouter.get('/reservation', async (request, response, next) => {
    const { customerId, restaurantId } = request.body;

    try {
        const reservations = await getMethods.reservation.createReservations({
            customersId,
            restaurantsId,
        });

        response.status(201).send({
            message: `Reservation Successfully Created`,
            reservations,

        });
    } catch (e) {
        next(e);
    }
});


apiRouter.post('/reservation', async (request, response, next) => {
    try {
        const customers = await getMethods.customers.getCustomers();

        response.send({ customers });

    } catch (e) {
        next(e);
    }
});


export default apiRouter;