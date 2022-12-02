# Design models and scenario (parking cost counting)

This code for codereviewer.

## ⚙️ Technologies Used

- yarn
- node.js
- express.js
- jest
- pg-npm
- PostgreSQL

## 📒 Guide

- Using Method GET /api/ : Get all data

- Using Method POST /api/adding : Adding data

- You can follow format to POST method below:

  ```
  {
  "idVehicle": number(choose one, 1 or 2),
  "getInTime": "YYYY-MM-DDTHH:mm:ss.000Z",
  "getOutTime": "YYYY-MM-DDTHH:mm:ss.000Z"
  }
  ```

  there have two vihacle type, 1 to car and 2 motorCycle.

- You can searching data with filter method by entering the query below:

  ```
  idVehicle : filter by vehicle type
  getOutCost : filter by minimum cost
  getInCost : filter by maximum cost
  startGetInTime : time getInTime / maximum getOutTime
  endGetOutTime : time maximum / minimum getOutTime
  ```

#### 🛠️ Unit testing on path folder

- [Testing with jest](https://github.com/franskbarek/parking-cost-counting/tree/main/test/parkingArea.test.js)
- [Postman generated to collection.json](https://github.com/franskbarek/parking-cost-counting/blob/main/test/postman.json)

###### Postman base code:

```
{
  "info": {
    "_postman_id": "1ac6efca-211d-4172-8d0f-84be1a19d61d",
    "name": "Parking-Area-Scenario",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "17475098"
  },
  "item": [
    {
      "name": "get all",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/api",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["api"]
        }
      },
      "response": []
    },
    {
      "name": "add data",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"idVehicle\": 2,\n    \"getInTime\": \"2022-11-11T08:00:32.000Z\",\n    \"getOutTime\": \"2022-11-11T09:00:37.000Z\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/api/add",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["api", "add"]
        }
      },
      "response": []
    }
  ]
}

```

[Download postman collection ⬇️](https://www.udrop.com/7BVB)
