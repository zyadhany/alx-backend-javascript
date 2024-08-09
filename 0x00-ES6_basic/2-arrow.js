export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (name) => {
    this.sanFranciscoNeighborhoods.push(name);
    return this.sanFranciscoNeighborhoods;
  };
}
