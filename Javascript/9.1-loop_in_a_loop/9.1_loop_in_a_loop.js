const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
const Neighbours = (n) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
      console.log("Neighbour:" + n[i][j]);
    }
  }
  return 1;
};
Neighbours(listOfNeighbours);
