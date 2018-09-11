const axios = require('axios')

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7477eaab3594ca656d573df92b7473d6&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}