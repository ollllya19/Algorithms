// https://leetcode.com/problems/trapping-rain-water/

function trap(heights) {
    let maxLeft = heights[0]
    let maxRight = heights[heights.length - 1]
    
    let left = 1
    let right = heights.length - 1

    let total = 0

    while(left <= right) {
        if(maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, heights[left])
            total += maxLeft - heights[left]
            left += 1
        } else {
            maxRight = Math.max(maxRight, heights[right])
            total += maxRight - heights[right]
            right -= 1
        }
    }

    return total
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))