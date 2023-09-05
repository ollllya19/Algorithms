/* https://leetcode.com/problems/search-in-rotated-sorted-array/
Тесты
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

function searchInSortedArr(input, target) {

    let left = 0
    let right = input.length - 1

    while(left <= right) {

        let mid = Math.floor((right + left) / 2)

        if (input[mid] === target) return mid

        if (input[left] < input[mid]) {
            if (input[left] <= target && target <= input[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        } else {
            if (input[mid] <= target && target <= input[right]){
                left = mid
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}