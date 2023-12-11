let address1 = createAddress("Raydushna", "Kyiv", "02218");
let address2 = new Address("Raydushna", "Kyiv", "02218");

console.log(address1);
console.log(address2);

//Factory function
function createAddress(street, city, zipCode) {
  return street, city, zipCode;
}

//Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
