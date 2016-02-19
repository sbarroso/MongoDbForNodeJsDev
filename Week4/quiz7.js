/*
Quiz: Trees

Given the following typical document for a e-commerce category hierarchy collection called categories
{
  _id: 34,
  name : "Snorkeling",
  parent_id: 12,
  ancestors: [12, 35, 90]
}
Which query will find all descendants of the snorkeling category?
*/

db.categories.find({ancestors:34})
