/* https://leetcode.com/problems/set-matrix-zeroes/

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

function setZeros(input) {
    let rows = input.length
    let cols = input[0].length

    let isCal = false

    // set zeros to first column or row
    for(let i = 0; i < rows; i++) {
        if(input[i][0] === 0) 
            isCal = true

        for(let j = 1; j < cols; j++) {
            if(input[i][j] === 0){
                input[0][j] = 0
                input[i][0] = 0
            }
        }
    }

    // to sezos according first column and first row 
    for(let i = 1; i < rows; i++) {
        for(let j = 1; j < cols; j++) {
            if(input[i][0] === 0 || input[0][j] === 0)
                input[i][j] = 0
        }
    }

    // to check first column and first row
    if(input[0][0] === 0) {
        for (let i = 0; i < cols; i++){
            input[0][i] = 0
        }
    }

    if(isCal) {
        for (let i = 0; i < rows; i++){
            input[i][0] = 0
        }
    }

    return input
}