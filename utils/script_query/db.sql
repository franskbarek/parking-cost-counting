CREATE DATABASE usrnegvw

CREATE TABLE vehicle(
    id SERIAL PRIMARY KEY,
    vehicle_type VARCHAR NOT NULL
);

INSERT INTO vehicle(vehicle_type) VALUES ('car'),('motorcycle');

CREATE TABLE parkingarea(
    id SERIAL PRIMARY KEY,
    id_vehicle INT NOT NULL,
    getin_time TIMESTAMP NOT NULL,
    getout_time TIMESTAMP NOT NULL,
    cost INT NOT NULL,
    FOREIGN KEY (id_vehicle) REFERENCES vehicle(id)
);

INSERT INTO parkingarea(id_vehicle, getin_time, getout_time, cost) VALUES(2, '2022-12-01T04:05:06.000Z', '2022-12-01T05:05:06.000Z', 10000);

SELECT parkingarea.id, vehicle.vehicle_type, parkingarea.getin_time, parkingarea.getout_time, cost FROM parkingarea 
JOIN vehicle ON parkingarea.id_vehicle=vehicle.id ORDER BY id ASC;