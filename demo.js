const car = {
  name: "Camry"
  brand: "Toyoya",
  mileage: 10_000,
  fuelLevel: 18,
  maxFuelLevel: 50,
  litrePerkm: 0.05,
  drive: function (km) {
    this.mileage += km;
    this.fuelLevel -= (km * this.litrePerKm);
  }
}
console.log(car.mileage);
car.drive(100);
console.log(car.fuelLevel);
