export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
