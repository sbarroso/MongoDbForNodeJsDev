/*
Quiz: Multikey Indexes

Suppose we have a collection foo that has an index created as follows:
db.foo.createIndex( { a:1, b:1 } )
Which of the following inserts are valid to this collection?
*/

db.foo.insert( { a : "grapes", b : "oranges" } )
db.foo.insert( { a : ["apples", "oranges" ], b : "grapes" } )
db.foo.insert( { a : "grapes", b : [ 8, 9, 10 ] } )