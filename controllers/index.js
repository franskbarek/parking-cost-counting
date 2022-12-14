const { selectSome, insert } = require("../models/parkingarea.models");
const statusName = require("../utils/service/statusCode");
const calculateCost = require("../utils/service/counterCost");

const controllers = {
  //get parkingarea data
  selectAllData: async (req, res) => {
    try {
      const idVehicle = req.query.idVehicle || 0;
      const getInTime = req.query.getInTime || "";
      const getOutTime = req.query.getOutTime || "";
      const getInCost = req.query.getInCost || 0;
      const getOutCost = req.query.getOutCost || 0;

      //validation idVehicle dan cost !isNumber == isNan
      if (isNaN(idVehicle) || isNaN(getInCost) || isNaN(getOutCost)) return statusName.response(res, null, 400, "Failed to insert data! Invalid query params!");
      const result = await selectSome(idVehicle, getInTime, getOutTime, getInCost, getOutCost);

      if (result.rows.length === 0) {
        return statusName.response(res, result.rows, 404, "Data not found!");
      }

      return statusName.response(res, result.rows, 200, "Get data success!");
    } catch (error) {
      console.log(error);
      return statusName.response(res, error, 500, "Internal server error!");
    }
  },

  //Adding data parkingarea
  insertData: async (req, res) => {
    try {
      const idVehicle = req.body.idVehicle || 0;
      const getInTime = req.body.getInTime || "";
      const getOutTime = req.body.getOutTime || "";
      const inputError = [];
      let time = 0;

      //Validation input not null
      if (!idVehicle) inputError.push("input idVehicle required");
      if (!getInTime) inputError.push("input getInTime required");
      if (!getOutTime) inputError.push("input getOuTime required");

      if (idVehicle < 1 || idVehicle > 2 || isNaN(idVehicle)) return statusName.response(res, inputError, 400, "Failed to insert data! Invalid idVehicle!");

      if (inputError.length > 0) return statusName.response(res, inputError, 400, "Failed to insert data! Check your input!");

      //Rounded time to floor
      time = (new Date(getOutTime) - new Date(getInTime)) / 1000;
      let roundedTime = Math.floor(time);

      if (time < 0) return statusName.response(res, inputError, 400, "Invalid time input!");

      const cost = calculateCost(idVehicle, roundedTime);
      const result = await insert(idVehicle, getInTime, getOutTime, cost);

      return statusName.response(res, { rowCount: result.rowCount, idVehicle, getInTime, getOutTime, cost }, 201, "Data created successfully!");
    } catch (error) {
      console.log(error);
      return statusName.response(res, error.rows, 500, "Internal server error!");
    }
  },

  renderAllData: async (req, res) => {
    try {
      const idVehicle = req.query.idVehicle || 0;
      const getInTime = req.query.getInTime || "";
      const getOutTime = req.query.getOutTime || "";
      const getInCost = req.query.getInCost || 0;
      const getOutCost = req.query.getOutCost || 0;

      //validation idVehicle dan cost !isNumber == isNan
      if (isNaN(idVehicle) || isNaN(getInCost) || isNaN(getOutCost)) return statusName.response(res, null, 400, "Failed to insert data! Invalid query params!");
      const result = await selectSome(idVehicle, getInTime, getOutTime, getInCost, getOutCost);

      if (result.rows.length === 0) {
        return res.render("error-page", {
          layout: "main-layout",
          data: {
            message: "Data not found!",
          },
        });
      }

      const rowsForView = result.rows.map((r, idx) => {
        const dateIn = new Date(r.getin_time);
        const dateOut = new Date(r.getout_time);

        const row = {
          no: idx + 1,
          id: r.id,
          vehicle_type: r.vehicle_type,
          date_in: dateIn.toLocaleDateString(),
          time_in: dateIn.toLocaleTimeString(),
          date_out: dateOut.toLocaleDateString(),
          time_out: dateOut.toLocaleTimeString(),
          cost: r.cost,
        };
        return row;
      });

      return res.render("main-page", {
        layout: "main-layout",
        data: {
          rows: rowsForView,
          handleTambahData: () => {
            console.log("BOOOOM!");
            res.redirect("/api");
          },
        },
      });
    } catch (error) {
      console.log(error);
      return res.render("error-page", {
        layout: "main-layout",
        data: {
          message: "Internal server error!",
          error,
        },
      });
    }
  },

  renderInsertFormPage: (req, res, next) => {
    return res.render("add-data-page", {
      layout: "main-layout",
    });
  },

  insertDataAndRedirect: async (req, res, next) => {
    try {
      const idVehicle = Number(req.body.idVehicle) || 0;
      const getInTime = req.body.getInTime || "";
      const getOutTime = req.body.getOutTime || "";
      const inputError = [];
      let time = 0;

      //Validation input not null
      if (!idVehicle) inputError.push("input idVehicle required");
      if (!getInTime) inputError.push("input getInTime required");
      if (!getOutTime) inputError.push("input getOuTime required");

      if (idVehicle < 1 || idVehicle > 2 || isNaN(idVehicle)) return statusName.response(res, inputError, 400, "Failed to insert data! Invalid idVehicle!");

      if (inputError.length > 0) {
        return res.render("error-page", {
          layout: "main-layout",
          data: {
            message: "Failed to insert data! Check your input!",
            // error: inputError,
          },
        });
      }

      //Rounded time to floor
      time = (new Date(getOutTime) - new Date(getInTime)) / 1000;
      let roundedTime = Math.floor(time);

      if (time < 0) return statusName.response(res, inputError, 400, "Invalid time input!");

      const cost = calculateCost(idVehicle, roundedTime);
      const result = await insert(idVehicle, getInTime, getOutTime, cost);

      return res.redirect("/web");
    } catch (error) {
      console.log(error);
      return res.render("error-page", {
        layout: "main-layout",
        data: {
          message: "Internal server error!",
          error,
        },
      });
    }
  },
};

module.exports = controllers;
