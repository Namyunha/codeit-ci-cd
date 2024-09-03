import { sum } from "./sum";

test("sum test", () => {
  expect(sum({ a: 1, b: 2 })).toBe(3);
});
