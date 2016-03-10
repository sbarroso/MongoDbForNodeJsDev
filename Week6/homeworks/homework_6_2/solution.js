db.grades.aggregate( [
    {$project: {
        student_id:1,
        class_id:1,
        scores: {$filter: {
            input: "$scores",
            as: "scores",
            cond: {$ne: ["$$scores.type", "quiz"]}
        }},
        _id:0
    }},
    {$unwind: "$scores"},
    {$group: {
        _id: {
            student_id: "$student_id",
            class_id: "$class_id"
            },
        avgScore: {$avg: "$scores.score"}
    }   },
    {$group: {
        _id: {
            class_id: "$_id.class_id",
            },
        avgClassScore: {$avg: "$avgScore"}
    }   },
    { $sort: { avgClassScore: -1 } }   
] ).pretty();
