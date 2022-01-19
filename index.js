const { xor } = require("./utils/utils.js");

const getPinBlock = (pin, cardnumber) => {
  if (cardnumber.length <= 12) {
    throw new Error("Card number atleast be 12 digits long");
    return;
  }

  var block1 = "0" + pin.length.toString() + pin;
  while (block1.length < 16) block1 += "F";

  var block2 = "0000" + cardnumber.substr(cardnumber.length - 12 - 1, 12);

  return xor(block1, block2);
};

module.exports = { getPinBlock };
