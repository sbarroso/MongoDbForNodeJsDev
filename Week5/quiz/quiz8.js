/*
Quiz: Dot Notation and Multikey

Suppose you have a collection called people in the database earth with documents of the following form:
{
	"_id" : ObjectId("551458821b87e1799edbebc4"),
	"name" : "Eliot Horowitz",
	"work_history" : [
		{
			"company" : "DoubleClick",
			"position" : "Software Engineer"
		},
		{
			"company" : "ShopWiki",
			"position" : "Founder & CTO"
		},
		{
			"company" : "MongoDB",
			"position" : "Founder & CTO"
		}
	]
}

Type the command that you would issue in the Mongo shell to create an index on company, descending.
*/

db.people.createIndex({"work_history.company": -1})
