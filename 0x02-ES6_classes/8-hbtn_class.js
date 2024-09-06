export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toNumber() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
