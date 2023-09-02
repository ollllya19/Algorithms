// https://leetcode.com/problems/container-with-most-water/

function maxArea(heights) {
    let left = 0
    let rigth = heights.length - 1


    let maxArea = Math.min(heights[left], heights[rigth]) * (rigth - left)

    while(left < rigth) {
        if (heights[left] <= heights[rigth]) {
            left += 1
        } else {
            rigth -= 1
        }
        let area = Math.min(heights[left], heights[rigth]) * (rigth - left)
        if (area > maxArea) 
            maxArea = area
    }

    return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))