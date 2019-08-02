const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0425633ae3055900644ab5fd0f5ef916&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}