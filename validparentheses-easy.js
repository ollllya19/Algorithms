// https://leetcode.com/problems/valid-parentheses/

function isOpenBracket(sym) {
    return ['(', '{', '['].indexOf(sym) > -1
}

function validParenthesses(arr) {

    let stack = []
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < arr.length; i++) {
        
        if(isOpenBracket(arr[i])) {
            stack.push(arr[i])
        } else {
            if (brackets[stack.pop()] !== arr[i]) return false
        }
    }

    return stack.length === 0
}