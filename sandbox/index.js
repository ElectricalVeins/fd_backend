class Car {
  constructor (price) {
    this._price = price;
  }

  get price () {
    return this._price;
  }

}

const BMW = new Car(100000);


console.log(BMW.price);


class CarWithCondition {
  constructor (price,car) {
    this._car=car;
    this._price = price + this._car.price;
  }
  get price(){
    return this._price;
  }
}

const BMWWithCondition = new CarWithCondition(1000,BMW);

console.log(BMWWithCondition.price);