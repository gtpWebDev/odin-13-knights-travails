/*

  Do I need to create the representation of the graph itself?
  e.g. Adjacency list:
  [0,0] -> [2,1][2,1]
  [1,0] => [3,1][2,2[[0,2]

  Or can I generate this dynamically from any starting node?
  e.g. start at [0,0], generate 2 edges and vertices
  [0,0] -> [2,1][2,1]
  Then consider [2,1] and generate the edges and vertices:
  [2,1] -> [4,0][4,2]...

  Prefer the latter. Given its all calculatable, don't see benefit in generating a big adjacency matrix

  Smart approach would be to remember where I have been, to control potential for wandering forever.
  But for 8x8 board not an issue.

  Breadth first search seems obvious
  - that way when a path is found, you just need to complete that level for all possibilities
  - depth first would go on forever unless you discounted previous trodden path

  Broadly, apprach would be:

    node:
      data = [2,1]
      adjacentVertices = [
        [4,0],
        [4,2],
        [3,3],
        [1,3],
        [0,2],
        [0,0]
      ]
  
  - register first location
  - generate adjacency matrix for position

  - use breadth first search algorithem:
    - assess whether node represents SUCCESS - REQUIRED END POINT
    - if not, generate all adjacent position
    [2,1] -> [4,0][4,2][3,3][1,3][0,2][0,0] (2 refused off board)
    - iterate through each edge to each vertex (rather than binary just left and right)

    when all vertices have been added to queue, remove node from queue

    go to next queue item

    repeat process until success (queue will never empty given nature of problem)


    


*/
