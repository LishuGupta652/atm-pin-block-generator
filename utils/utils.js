const strip = (str) => {
  str = str || "";
  return str.replace(/\s+/g, "");
};

const toBuffer = (data) => {
  if (Buffer.isBuffer(data)) {
    return data;
  } else if (typeof data === "string") {
    data = strip(data);
    return new Buffer.from(data, "hex");
  } else if (typeof data == "number") {
    var h = data.toString(16).toUpperCase();
    if ((h.length & 1) == 1) {
      h = "0" + h;
    }
    return new Buffer.from(h, "hex");
  } else {
    return new Buffer.alloc(0);
  }
};
const xor = (arr1, arr2) => {
  arr1 = toBuffer(arr1);
  arr2 = toBuffer(arr2);

  var ret = [];
  var len = arr1.length > arr2.length ? arr2.length : arr1.length;
  for (var i = 0; i < len; i++) {
    ret[i] = arr1[i] ^ arr2[i];
  }

  var result = new Buffer.from(ret);
  return result.toString("hex").toUpperCase();
};

module.exports = {
  xor,
};
