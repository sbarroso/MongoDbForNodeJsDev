/*
Quiz: Reshaping Documents in $project Stages

Consider the following aggregation query.

db.companies.aggregate([
    { $project: {
        _id: 0, 
        name: 1,
        people: "$relationships.person.last_name"
    } }
])
What would be third entry in the "people" array for Facebook if this query were run against the CrunchBase data set? If you can't figure it out, do a little experimentation using an aggregation query. You might want to add a $match stage to the pipeline provided.
*/

Sandberg