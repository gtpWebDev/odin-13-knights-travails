const boardWidth = 8;

const knightMoveArray = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
  { x: 1, y: -2 },
  { x: -1, y: -2 },
  { x: -2, y: -1 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
];

class Vertex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.adjacentVertices = null;

    /* adjacentVertices is an array of objects with structure 
      { vertex: Vertex, x: 1, y: 2 },
    */
  }

  // dynamically generates an adjacency list and the adjacent vertices
  generateVertices() {
    const withinBoard = (x, y) =>
      x >= 0 && x < boardWidth && y >= 0 && y < boardWidth;

    let vertices = knightMoveArray.map((element) => ({
      vertex: new Vertex(element.x + this.x, element.y + this.y),
      x: element.x + this.x,
      y: element.y + this.y,
    }));
    this.adjacentVertices = vertices.filter((element) =>
      withinBoard(element.x, element.y)
    );
  }
}

export { Vertex as default };
