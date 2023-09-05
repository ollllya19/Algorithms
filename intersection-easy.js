// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

function intersection(nums1, nums2) {
    let map = {}
    let rez = []

    for (let elem of nums2) {
        map[elem] = map[elem] ? map[elem] + 1 : 1
    }

    for (let elem of nums1) {
        if (map[elem] && map[elem] > 0) {
            map[elem] = map[elem] - 1
            rez.push(elem)
        }
    }

    return rez
}