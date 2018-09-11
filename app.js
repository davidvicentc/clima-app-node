const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "direccion de la ciudad del mundo",
    demand: true
  }
}).argv;

const getInfo = async direccion => {
  try {
    const coors = await lugar.getlugarLatLng(direccion);
    const temp = await clima.getClima(coors.lat, coors.lng);

    return `La temperatura en ${coors.direccion} es de ${temp} grados`;
  } catch (e) {
    return `no se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));
