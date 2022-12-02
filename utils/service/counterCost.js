//Function calculation cost
const counterCost = (idVehicle, roundedTime) => {
  //Declare global variable
  let costHour = 0;
  let costDay = 0;
  let totalCost = 0;

  //Termine by vehicle type
  if (idVehicle === 1) {
    costHour = 5000;
    costDay = 80000;
  } else if (idVehicle === 2) {
    costHour = 2000;
    costDay = 40000;
  }

  //If more then 1 day
  let timeDay = Math.floor(roundedTime / (60 * 60 * 24));
  if (timeDay >= 1) {
    totalCost += timeDay * costDay;
    roundedTime -= timeDay * 60 * 60 * 24;
  }

  //Counting cost per hour
  let timeHour = Math.floor(roundedTime / (60 * 60));
  if (timeHour >= 1) {
    totalCost += timeHour * costHour;
    roundedTime -= timeHour * 60 * 60;
  }

  if (roundedTime > 60) {
    totalCost += costHour;
  }

  return totalCost;
};

module.exports = counterCost;
