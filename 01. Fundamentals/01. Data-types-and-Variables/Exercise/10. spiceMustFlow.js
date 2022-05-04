function solve(yield){
    let extraced = 0
    let workersConsumePerDay = 26
    let days_operated = 0
    let minProfitableAmount = 100
    let yieldConsumedPerDay = 10

    while (yield > minProfitableAmount){
        extraced += yield - workersConsumePerDay
        yield -= yieldConsumedPerDay
        days_operated += 1
    }

    extraced -= 26

    console.log(`${days_operated}\n${extraced}`)



}

solve(111)