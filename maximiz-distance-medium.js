/* https://leetcode.com/problems/maximize-distance-to-closest-person/
Input: seats = [1,0,0,0,1,0,1]
Output: 2
*/

function maximizeDistance(input) {

    let max = 1

    for (let i = 0; i < input.length; i++) {

        if(input[i] === 0) {

            let curMax = 0
            let l = i - 1
            let r = i + 1

            while(input[l] !== undefined || input[r] !== undefined) {
                curMax += 1
                if(input[l] === 1 || input[r] === 1) {
                    break
                } else {
                    l --
                    r ++
                }
            }

            max = Math.max(max, curMax)
        }
    }

    return max
}

console.log(maximizeDistance([1,0,0,0,1,0,1]))