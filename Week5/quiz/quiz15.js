/*
Quiz: When is an Index Used?

Given collection foo with the following index:

db.foo.createIndex( { a : 1, b : 1, c : 1 } )
Which of the following queries will use the index?
*/

db.foo.find( { a : 3 } )
db.foo.find( { c : 1 } ).sort( { a : 1, b : 1 } )
