const { sum } = require("../controllers/sum");
const counterCost = require("../utils/service/counterCost");
//exmp
test("adds 1 + 2 to equal test1", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("adds 1 + 2 to equal 3 test2", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("adds 1 + 2 to equal 3 test3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

//Test by vehicle type
test("Function for type vehicle: car, if time 1 minute (expected cost = 0)", () => {
  expect(counterCost(1, 60)).toBe(0);
});

test("Function for type vehicle: car, if time 1 minute 1 second (expected cost = 5000)", () => {
  expect(counterCost(1, 61)).toBe(5000);
});

test("Function for type vehicle: car, if time 1 hour 1 minute (expected cost = 5000)", () => {
  expect(counterCost(1, 3660)).toBe(5000);
});

test("Function for type vehicle: car, if time 1 hour 1 minute and 1 second (expected cost = 10000)", () => {
  expect(counterCost(1, 3661)).toBe(10000);
});

test("Function for type: car, if time 23 hours 1 minute and 1 second (expected cost = 120000)", () => {
  expect(counterCost(1, 82861)).toBe(120000);
});

test("Function for type: car, if time 1 day (expected cost = 80000)", () => {
  expect(counterCost(1, 86400)).toBe(80000);
});

test("Function for type: car, if time 1 day 6 hours and 1 minute (expected cost = 110000)", () => {
  expect(counterCost(1, 108060)).toBe(110000);
});

test("Function for type: car, if time 1 day 6 hours 1 minute and 1 second (expected cost = 115000)", () => {
  expect(counterCost(1, 108061)).toBe(115000);
});

test("Function for type: car, if time 2 day 6 hours 1 minute and 1 second (expected cost = 195000)", () => {
  expect(counterCost(1, 194461)).toBe(195000);
});

test("Function for type: motorCycle, if time 1 minute (expected cost = 0)", () => {
  expect(counterCost(2, 60)).toBe(0);
});

test("Function for type: motorCycle, if time 1 minute 1 second (expected cost = 2000)", () => {
  expect(counterCost(2, 61)).toBe(2000);
});

test("Function for type: motorCycle, if time 1 hour 1 minute (expected cost = 2000)", () => {
  expect(counterCost(2, 3660)).toBe(2000);
});

test("Function for type: motorCycle, if time 1 hour 1 minute and 1 second (expected cost = 4000)", () => {
  expect(counterCost(2, 3661)).toBe(4000);
});

test("Function for type: motorCycle, if time 23 hours 1 minute and 1 second (expected cost = 48000)", () => {
  expect(counterCost(2, 82861)).toBe(48000);
});

test("Function for type: motorCycle, if time 1 day (expected cost = 40000)", () => {
  expect(counterCost(2, 86400)).toBe(40000);
});

test("Function for type: motorCycle, if time 1 day 6 hours and 1 minute (expected cost = 52000)", () => {
  expect(counterCost(2, 108060)).toBe(52000);
});

test("Function for type: motorCycle, if time 1 day 6 hours 1 minute and 1 second (expected cost = 54000)", () => {
  expect(counterCost(2, 108061)).toBe(54000);
});

test("Function for type: motorCycle, if time 2 day 6 hours 1 minute and 1 second (expected cost = 114000)", () => {
  expect(counterCost(2, 194461)).toBe(94000);
});
