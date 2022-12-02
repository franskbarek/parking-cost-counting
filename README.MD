# Design models and scenario (parking cost counting)

This code to codereviewer.

## Technologies Used

- yarn
- node.js
- express.js
- jest
- pg-npm
- PostgreSQL

## Guide

- Using Method GET /api/ : Get all data

- Using Method POST /api/adding : Adding data

- You can follow format to POST method below:
  {
  "idVehicle": number(choose one, 1 or 2),
  "getInTime": "YYYY-MM-DDTHH:mm:ss.000Z",
  "getOutTime": "YYYY-MM-DDTHH:mm:ss.000Z"
  }
  there have two vihacle type, 1 to car and 2 motorCycle.

- You can data searching with filter method by entering the query below:
  idVehicle : filter by vehicle type
  getOutCost : filter by minimum cost
  getInCost : filter by maximum cost
  startGetInTime : time getInTime / maximum getOutTime
  endGetOutTime : time maximum / minimum getOutTime

#### Unit testing on path folder

- [testing with Jest](https://github.com)
- [testing with postman](https://github.com)
