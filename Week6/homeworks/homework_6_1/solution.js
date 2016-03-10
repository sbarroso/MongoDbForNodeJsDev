db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0, name:1 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 },
        names: { $addToSet: "$name" }
    } },
    { $sort: { count: -1 } },
    {$project: {_id: 1, count: 1, num: {"$size": "$names"}}},
    {$match: { "_id.permalink": "eric-di-benedetto" } }
] ).pretty();