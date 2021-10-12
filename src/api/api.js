import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://webhook.site/699a6289-6172-4958-b65f-6487c5c9d7b1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const passengerAPI = {
    postPassenger(passengers) {
        return instance.post('/', { passengers: passengers })
    }
}