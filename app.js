const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para tener el clima'
    }
}).argv;





const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.long);
        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (e) {
        return `Nose pudo retornar la direccion ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);