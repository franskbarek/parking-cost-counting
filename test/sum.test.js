import { sum } from "../controllers/sum.js";

test("adds 1 + 2 to equal 3 pertama", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("adds 1 + 2 to equal 3 kedua", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("adds 1 + 2 to equal 3 ketiga", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
