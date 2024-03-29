import Graph from "./Graph.js";
import Node from "./Vertex.js";

// const node = new Node(2, 1);
// console.log(node.adjacentVertices);

function knightMoves(start, end) {
  const graph = new Graph(start.x, start.y);
  graph.buildPath(end);
  // console.log(bestRoute);
}

knightMoves({ x: 3, y: 3 }, { x: 1, y: 2 });
