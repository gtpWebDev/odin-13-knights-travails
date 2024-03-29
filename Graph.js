import Vertex from "./Vertex.js";
import Queue from "./Queue.js";

class Graph {
  constructor(x, y) {
    this.root = new Vertex(x, y);
  }

  // dynamically builds a graph using breadth-first search pattern
  // returns the first located Vertex at the end point
  buildPath = (endVertex) => {
    // queue data structure facilitates levelOrder search
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.peek()) {
      const currentVertex = queue.peek();

      if (foundEnd(currentVertex, endVertex)) {
        return currentVertex;
      } else {
        // add all the possible moves for the current position, and queue them
        currentVertex.generateVertices();
        currentVertex.adjacentVertices.forEach((element) => {
          queue.enqueue(element.vertex);
        });
      }
      queue.dequeue();
    }
  };

  // returns depth of a Vertex (number of moves to the location)
  depth = (endVertex) => {
    function depthRecurse(vertex, depth) {
      if (foundEnd(vertex, endVertex)) {
        currDepth = depth;
        return;
      } else if (vertex.adjacentVertices) {
        vertex.adjacentVertices.forEach((element) => {
          depthRecurse(element.vertex, depth + 1);
        });
      }
    }

    let currDepth = 0;
    depthRecurse(this.root, currDepth);
    return currDepth;
  };

  // returns route to a Vertex form the Graph root
  route = (endVertex) => {
    function routeRecurse(vertex, route) {
      if (foundEnd(vertex, endVertex)) {
        routeArray = route;
        return;
      } else if (vertex.adjacentVertices) {
        vertex.adjacentVertices.forEach((element) => {
          routeRecurse(element.vertex, [
            ...route,
            { x: element.x, y: element.y },
          ]);
        });
      }
    }

    const startVertex = this.root;
    let routeArray = [{ x: startVertex.x, y: startVertex.y }];
    routeRecurse(this.root, routeArray);
    return routeArray;
  };
}

function foundEnd(currentLoc, endVertex) {
  return currentLoc.x === endVertex.x && currentLoc.y === endVertex.y
    ? true
    : false;
}

export { Graph as default };
