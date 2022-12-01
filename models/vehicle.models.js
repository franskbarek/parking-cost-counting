import db from "../config/postgreSql.js";

const vehicleModel = () => {
  const res = db("vehicle");
  return res;
};

export default vehicleModel;
