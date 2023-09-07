/*https://leetcode.com/problems/longest-palindromic-substring/
Input: s = "babad"
Output: "bab"
Input: s = "cbbd"
Output: "bb"
*/

function expandBorders(s, l, r) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        l --
        r ++
    }
    return r - l - 1
}

function longestPalindrom(input) {

    let start = 0
    let end = 0

    for(let i = 0; i < input.length; i++) {

        let len1 = expandBorders(input, i, i)
        let len2 = expandBorders(input, i, i + 1)
        
        let len = Math.max(len1, len2)

        if (len > (end - start)){
            start = Math.ceil(i - (len - 1)/2)
            end = Math.floor(i + len/2)
        }
    }

    return input.substring(start, end + 1)
}