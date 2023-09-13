// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function deleteFunction(input) {

    for (let i = 1; i < input.length; i ++) {

        if(input[i] === input[i - 1]) {
            input.splice(i, 1)
            i --
        }
    }

    return input.length
}