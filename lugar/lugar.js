const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'ed0683bf7dmsh7b50177f43e8578p1ce6e5jsn03d4820a8307' }
    });



    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encuentra esta direccion ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}