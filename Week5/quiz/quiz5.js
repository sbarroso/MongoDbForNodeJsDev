/*
Quiz: Creating Indexes

Please provide the mongo shell command to add an index to a collection named students, having the index key be class, student_name.

Neither will go in the "-1" direction..
*/

db.students.createIndex({class: 1, student_name: 1});