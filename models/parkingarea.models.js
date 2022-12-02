const pool = require("../lib/postgreSql");

const selectSome = (idVehicle, getInTime, getOutTime, getInCost, getOutCost) => {
  let condition = "";

  condition += idVehicle ? `AND parkingarea.id_vehicle=${idVehicle} ` : "";
  condition += getInTime ? `AND parkingarea.getin_time >= '${getInTime}' ` : "";
  condition += getOutTime ? `AND parkingarea.getin_time <= '${getOutTime}' ` : "";
  condition += getInCost ? `AND cost>=${getInCost} ` : "";
  condition += getOutCost ? `AND cost<=${getOutCost}` : "";

  return new Promise((resolve, reject) =>
    pool.query(
      `SELECT parkingarea.id, vehicle.vehicle_type, parkingarea.getin_time, parkingarea.getout_time, cost 
      FROM parkingarea 
      JOIN vehicle ON parkingarea.id_vehicle=vehicle.id
      WHERE parkingarea.id>0 ${condition}
      ORDER BY parkingarea.id DESC`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const insert = (idVehicle, getInTime, getOutTime, cost) => {
  return new Promise((resolve, reject) =>
    pool.query(
      `INSERT INTO parkingarea(id_vehicle, getin_time, getout_time, cost)
      VALUES(${idVehicle}, '${getInTime}', '${getOutTime}', ${cost})`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

module.exports = { selectSome, insert };
