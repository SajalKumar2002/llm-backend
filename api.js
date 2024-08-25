const axios = require('axios');

const api1 = axios.create({
    baseURL: "https://b0ba-35-227-166-156.ngrok-free.app"
})

const api2 = axios.create({
    baseURL: "https://81f4-35-204-58-215.ngrok-free.app"
})

const api3 = axios.create({
    baseURL: "https://4117-34-145-83-50.ngrok-free.app"
})

module.exports = {
    api1, api2, api3
};
