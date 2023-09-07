/* https://leetcode.com/problems/shuffle-an-array/*/

function shuffleArray(input) {

    for(let i = input.length - 1; i > 0; i--) {

        let tmp = input[i]
        let rnd = Math.floor(Math.random() * (i + 1) )
        input[i] = input[rnd]
        input[rnd] = tmp
    }

    return input
}