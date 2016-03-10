db.companies.aggregate( [
    {$match: {founded_year: 2004, funding_rounds: {$ne: []}}},

    {$project: {
        _id: 0,
        name: 1,
        tamano: {$size: "$funding_rounds"},
        funding_rounds: 1        
    }},
    { $match: {tamano: {$gte: 5}}},
    { $project: {
        name: "$name",
        average: {$avg: "$funding_rounds.raised_amount"}
    }},
    {$sort: {"average": 1}}
    
] ).pretty();
