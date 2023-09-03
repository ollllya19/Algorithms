// https://leetcode.com/problems/brick-wall/
/* Тесты
input: [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
output: 2

input: [[1],[1],[1]]
output: 3
*/

function brickWall(input) {
    let map = {}
    let max = 0

    input.forEach(element => {
        let sum = 0

        for (let i = 0; i < element.length - 1; i++) {
            sum += element[i]
            map[sum] = map[sum] ? map[sum] + 1: 1 
            max = Math.max(max, map[sum])
        }
    });

    return input.length - max
}

console.log(brickWall([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))