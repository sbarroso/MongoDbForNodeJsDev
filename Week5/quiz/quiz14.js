/*
Quiz: Covered Queries

You would like to perform a covered query on the example collection. You have the following indexes:

{ name : 1, dob : 1 }
{ _id : 1 }
{ hair : 1, name : 1 }
Which of the following is likely to be a covered query? Check all that apply.
*/

db.example.find( { name : { $in : [ "Bart", "Homer" ] } }, {_id : 0, dob : 1, name : 1} )