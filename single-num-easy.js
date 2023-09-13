// https://leetcode.com/problems/single-number/

function singleNumber(input) {

    let set = new Set()
    let uniqSum = 0
    let sum = 0

    for(let i = 0; i < input.length; i++) {

        if(!set.has(input[i])) {
            set.add(input[i])
            uniqSum += input[i]
        }

        sum += input[i]
    }

    return 2 * uniqSum - sum
}

console.log(singleNumber([2,2,1]))