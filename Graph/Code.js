/*
 Ways to represent a Graph
 due the example:

          2 -- 0
         / \
        1 - 3
*/

// Edge is the path
const edgeList = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
]

// Adjacent List
// 0 1 2 3
const adjacentList = [[2], [2,3], [0,1,3], [1,2]]

const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
}

// Adjacent Matrix
const graphMatrixOne = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
const graphMatrixTwo = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}