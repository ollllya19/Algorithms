// https://leetcode.com/problems/first-unique-character-in-a-string/
// Input: s = "leetcode"
// Output: 0

function uniqueCharacter(input_str) {
    let map = {}

    for (let s of input_str) {
        map[s] = map[s] ? map[s] + 1 : 1
    }

    for (let i  = 0; i < input_str.length; i++) {
        if (map[input_str[i]] === 1) return i 
    }

    return -1
}