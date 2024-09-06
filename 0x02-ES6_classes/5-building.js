export default class Building {
  constructor (sqft) {
    this.sqft = sqft;
  }

  get sqft () {
    return this._sqft;
  }

  set sqft (newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = newSqft;
  }

  
}
