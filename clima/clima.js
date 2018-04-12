const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=0a059b2b12f3433581c71aef81432d50&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}