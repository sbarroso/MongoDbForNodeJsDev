/*
Quiz: Using Explain

Which of the following are valid ways to find out which index uses a particular query? Check all that apply.
*/

db.example.find( { a : 1, b : 2 } ).explain()
db.example.explain().remove( { a : 1, b : 2 } )
var exp = db.example.explain(); exp.find( { a : 1, b : 2 } )
db.example.explain().find( { a : 1, b : 2 } )
curs = db.example.find( { a : 1, b : 2 } ); curs.explain()
