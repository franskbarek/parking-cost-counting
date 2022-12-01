import vehicleModel from "../models/vehicle.models.js";

export const getAll = (req, res) => {
  try {
    const data = vehicleModel;
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return console.log(err.message);
  }
};
