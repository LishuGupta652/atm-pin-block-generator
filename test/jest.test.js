// `npx jest`  // Run all tests
const { getPinBlock } = require("../index.js");

test("Getting Pin Block", () => {
  expect(getPinBlock("92389", "4000001234565")).toBe("0592789FFFEDCBA9");
});
test("Getting Pin Block 2", () => {
  expect(getPinBlock("1234", "4000001234562000")).toBe("041234FEDCBA9DFF");
});
