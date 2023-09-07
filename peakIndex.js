/*https://leetcode.com/problems/peak-index-in-a-mountain-array/
Input: arr = [0,1,0]
Output: 1
Input: arr = [0,2,1,0]
Output: 1
Input: arr = [0,10,5,2]
Output: 1
*/

function peakIndexInMountainArray(input) {

    let left = 0
    let right = input.length - 1

    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if((input[mid] > input[mid - 1]) && (input[mid] > input[mid + 1])) {
            return mid
        } else if(input[mid] > input[mid + 1]) {
            right = mid
        } else if (input[mid] < input[mid + 1]) {
            left = mid
        }
    }
}

console.log(peakIndexInMountainArray([0,1,0]))