// https://leetcode.com/problems/number-of-islands/
/*
Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
Output: 1
*/

function numOfIslands(grid) {
    if (grid.length === 0) return 0

    let counter = 0

    function markNeighbour(grid, i, j) {
        grid[i][j] = '5'

        if(grid?.[i]?.[j - 1] === '1') markNeighbour(grid, i, j - 1)
        if(grid?.[i]?.[j + 1] === '1') markNeighbour(grid, i, j + 1)
        if(grid?.[i - 1]?.[j] === '1') markNeighbour(grid, i - 1, j)
        if(grid?.[i + 1]?.[j] === '1') markNeighbour(grid, i + 1, j)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                counter += 1
                markNeighbour(grid, i, j)
            }
        }
    }

    return counter
}

console.log(numOfIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]))