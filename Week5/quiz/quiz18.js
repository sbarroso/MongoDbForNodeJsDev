/*
Quiz: Geospatial Indexes

Suppose you have a 2D geospatial index defined on the key location in the collection places. Write a query that will find the closest three places (the closest three documents) to the location 74, 140.
*/

db.places.find({location: {$near: [74, 140]}}).limit(3)
