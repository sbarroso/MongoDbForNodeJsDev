/*
Quiz: Index Creation Option, Unique

Please provide the mongo shell command to create a unique index on student_id, class_id, ascending for the collection students.
*/

db.students.createIndex({"student_id":1, "class_id":1}, {"unique": true})