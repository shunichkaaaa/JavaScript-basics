let address = {
  street: "Raydushna",
  city: "Kyiv",
  zipCode: "02218",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
