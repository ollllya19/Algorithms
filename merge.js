// https://leetcode.com/problems/merge-intervals/
// [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]

/*
Алгоритм:
- если длина массива < 2 возвращаем его
- сортируем
- кладем изначательный элемент в результирующий массив
- проходимся в цикле по входному массиу
- если конец последнего элемента в массиве >= началу текущего, то конец последнегов результате меняем на максимум двух
  если конец пос элемент < начала текущего, то кладем в результат текущий массив
- возвращаем результат в виде массива
*/

function merge(intervals) {

    if (intervals.length < 0)
        return intervals

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let rez = [intervals[0]]
    for (let interval of intervals) {

        let recent = rez[rez.length - 1]

        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            rez.push(interval)
        }
    }

    return rez
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

