const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBw9kp9Dme8bD4AjSH30X-pHc75iz2ys0M`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;


    return {
        direccion,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}