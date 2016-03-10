/*
Quiz: Geospatial Spherical

What is the query that will query a collection named "stores" to return the stores that are within 1,000,000 meters of the
location latitude=39, longitude=-130? Type the query in the box below. Assume the stores collection has a 2dsphere index on "loc" and please use the "$near" operator. Each store record looks like this:

{ "_id" : { "$oid" : "535471aaf28b4d8ee1e1c86f" }, "store_id" : 8, "loc" : { "type" : "Point", "coordinates" : [ -37.47891236119904, 4.488667018711567 ] } }
*/

db.stores.find({loc: {$near: {$geometry: {type: "Point", coordinates: [-130, 39]}, $maxDistance: 1000000}}})