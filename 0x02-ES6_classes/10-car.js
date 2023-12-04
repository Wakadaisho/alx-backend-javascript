/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // cloneCar() {
  //   const cloneInstance = new this.constructor();

  //   return cloneInstance;
  // }
  cloneCar() {
    return Symbol.species();
  }

  static get [Symbol.species]() {
    return this;
  }
}
