// [7,1,5,3,6,4]
// даны акции в определенные дни, определить максимальную прибыль от покупки или продажи акции
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/


function max_profit() {
    let rez = 0

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] > stocks[i - 1])
            rez += stocks[i] - stocks[i - 1]
    }

    return rez
}