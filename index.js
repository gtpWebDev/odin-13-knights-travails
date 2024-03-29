import Graph from "./Graph.js";
import { boardWidth } from "./Vertex.js";

function knightMoves(start, end) {
  if (endPointValid(end)) {
    const graph = new Graph(start.x, start.y);
    const endVertex = graph.buildPath(end);
    console.log(
      `You made it in ${graph.depth(endVertex)} moves! Here's your path:`
    );

    const routeArray = graph.route(end);
    console.log(routeArray);
  } else {
    console.log("End point isn't valid.");
  }
}

function endPointValid(vertex) {
  return vertex.x >= 0 &&
    vertex.x < boardWidth &&
    vertex.y >= 0 &&
    vertex.y < boardWidth
    ? true
    : false;
}

knightMoves({ x: 0, y: 0 }, { x: 7, y: 7 });
