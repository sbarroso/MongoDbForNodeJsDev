/*
Homework: Homework: 6.3

For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

As a check on your solution, Facebook had the largest funding round average.
*/

db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $project: {
        _id: 0,
        name: 1,
        funding_rounds: 1,
        num_rounds: { $size: "$funding_rounds" }
    } },
    { $match: { num_rounds: { $gte: 5 } } },
    { $project: {
        name: 1,
        avg_round: { $avg: "$funding_rounds.raised_amount" }
    } },
    { $sort: { avg_round: 1 } }
]).pretty()

Solution: Nimbit