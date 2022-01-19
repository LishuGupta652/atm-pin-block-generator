// `npx jest`  // Run all tests
const { getPinBlock } = require("pin-block-generation");

test("Getting Pin Block with card number of 13 digit", () => {
  expect(getPinBlock("92389", "4000001234565")).toBe("0592789FFFEDCBA9");
});
test("Getting Pin Block with card number of more than 13 digit", () => {
  expect(getPinBlock("1234", "4000001234562000")).toBe("041234FEDCBA9DFF");
});

test("Getting error on having the card number less than 12 digit", () => {
  expect(() => getPinBlock("1234", "400000123456")).toThrow(
    "Card number atleast be 12 digits long"
  );
});
