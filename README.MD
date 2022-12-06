# Skenario dan models (parking cost count)

Dear codereviewer.

## ⚙️ Teknologi yang digunakan :

- yarn
- node.js
- express.js
- handlebars (view engine)
- jest
- postman
- pg-npm
- postgreSQL
- elephantsql (cloud db)

## 📒 Petunjuk untuk menjalankan aplikasi

#### Inisialisi seluruh `node module` sebelum menjalankan aplikasi

- Pertama-tama ketikan perintah `npm install` atau jika menggunkan yarn ketikan `yarn` pada terminal pada posisi dir aplikasi
- Kemudian jalankan aplikasi dengan mengetikan perintah `npm run dev` atau `yarn dev`

#### Ada 2 opsi untuk menjalankan dan menampilkan aplikasi

###### 1. Dengan user interface atau browser

- Get all data localhost:5000/web/
- Insert data localhost:5000/web/form

###### 2. Dengan tool postman:

- Get all data menggunakan method `GET` localhost:5000/api/
- Insert data menggunakan method `POST` localhost:5000/api/adding
- Berikut contoh implement hal tersebut :

  > {
  > "idVehicle": number(choose one, 1 or 2),
  > "getInTime": "YYYY-MM-DDTHH:mm:ss.000Z",
  > "getOutTime": "YYYY-MM-DDTHH:mm:ss.000Z"
  > }
  > `Ada dua tipe kendaraan:  vihacle type 1 to mobil dan 2 untuk motor.`

- You can searching data with filter method by entering the query below :

  > Pencarian berdasarkan jenis kendaraan : `idVehicle` (contoh -> 1)
  > Pencarian berdasarkan biaya minimum : `getOutCost` (contoh -> 5000)
  > Pencarian berdasarkan biaya maksimum : `getInCost` (contoh -> 80000)
  > Pencarian berdasarkan waktu minimum : `startGetInTime : time getInTime / maximum getOutTime`
  > Pencarian berdasarkan waktu keluar maksimum : `endGetOutTime : time maximum / minimum getOutTime`

#### 🛠️ Unit testing terdapat pada path folder, berikut tautan link :

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
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api"
					]
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
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"add"
					]
				}
			},
			"response": []
		},
		{
			"name": "get by query",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api?getInCost=10000&getOutCost=30000&idVehicle=1&startgetInTime=2020-11-07T09:05:05.000Z&endgetOutTime=2020-11-07T10:05:05.000Z",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api"
					],
					"query": [
						{
							"key": "getInCost",
							"value": "10000"
						},
						{
							"key": "getOutCost",
							"value": "30000"
						},
						{
							"key": "idVehicle",
							"value": "1"
						},
						{
							"key": "startgetInTime",
							"value": "2020-11-07T09:05:05.000Z"
						},
						{
							"key": "endgetOutTime",
							"value": "2020-11-07T10:05:05.000Z"
						}
					]
				}
			},
			"response": []
		}
	]
}

```

[Download postman collection ⬇️](https://www.udrop.com/7BW3)
