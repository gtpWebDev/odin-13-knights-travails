import Vertex from "./Vertex.js";
import Queue from "./Queue.js";

class Graph {
  constructor(x, y) {
    this.root = new Vertex(x, y);
    console.log(this.root);
  }

  /*
  - register first location
  - generate adjacency matrix for position

  - use breadth first search algorithem:
    - assess whether Vertex represents SUCCESS - REQUIRED END POINT
    - if not, generate all adjacent position
    [2,1] -> [4,0][4,2][3,3][1,3][0,2][0,0] (2 refused off board)
    - iterate through each edge to each vertex (rather than binary just left and right)

    when all vertices have been added to queue, remove Vertex from queue

    go to next queue item

    repeat process until success (queue will never empty given nature of problem)
*/

  // CHANGE THIS TO CREATE?
  // THEN GET DEPTH FOR NUMBER OF MOVES
  // THEN DO A ROUTE FUNCTION

  /*

  Required amends:
    Vertex shouldn't create vertices at point of creation
    Vertex should only generate vertices when Vertexs are generated:
    - adjacentVertices should equal a Vertex existing, similar to left, right
    In buildPath, only look at vertices if end loc is not found

  */

  // dynamically builds a graph using breadth-first search pattern
  // stops building when end location is found
  buildPath = (endLoc) => {
    console.log(`searching for ${endLoc.x}, ${endLoc.y}`);

    let foundEndPoint = false;

    // queue data structure facilitates levelOrder search
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.peek() && !foundEndPoint) {
      const currentVertex = queue.peek();

      console.log(`Assessing Vertex: ${currentVertex.x}, ${currentVertex.y}`);

      if (foundEnd(currentVertex, endLoc)) {
        foundEndPoint = true;
        console.log("FOUND END POINT");
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

  // returns number of moves / depth to reach end point
  // depth = (endLoc) => {
  //   function depthRecurse(Vertex, depth) {
  //     if (foundEnd(Vertex, endLoc)) currDepth = depth;

  //     Vertex.adjacentVertices.forEach((element) => {
  //       depthRecurse(Vertex.left, depth + 1);

  //       const moveLocation = new Vertex(element.x, element.y);
  //       queue.enqueue(moveLocation);
  //     });

  //     if (Vertex.left) depthRecurse(Vertex.left, depth + 1);
  //     if (Vertex.right) depthRecurse(Vertex.right, depth + 1);
  //   }

  //   let currDepth = 0;
  //   depthRecurse(this.root, currDepth);
  //   return currDepth;

  //   // start at tree root with depth zero
  // };
}

function foundEnd(currentLoc, endLoc) {
  return currentLoc.x === endLoc.x && currentLoc.y === endLoc.y ? true : false;
}

export { Graph as default };
