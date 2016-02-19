/*
Quiz: Updating based on multiple criteria

Write an update command that will remove the "tomato.consensus" field for all documents matching the following criteria:

The number of imdb votes is less than 10,000
The year for the movie is between 2010 and 2013 inclusive
The tomato.consensus field is null
How many documents required an update to eliminate a "tomato.consensus" field?

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data to answer this question.

*/


/*
You can arrive at the answer here in a couple of different ways, either of which provide some good learning opportunities. The key is realizing that you need to report on the number of documents that actually required an update to remove the tomato.consensus field. You can do this either by ensuring that you filter for only those documents that do not contain a tomato.consensus field or by recognizing that only 13 documents were actually modified by your update.

Using the first approach, you can issue the following command.

db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             $and: [{"tomato.consensus": {$exists: true} },
                                    {"tomato.consensus": null} ] },
                           { $unset: { "tomato.consensus": "" } });
In response, you will receive the following:
{ "acknowledged" : true, "matchedCount" : 13, "modifiedCount" : 13 }


Using the second approach, you can issue a simpler command, but one that is not precise about what needs to be updated.
db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             "tomato.consensus": null },
                           { $unset: { "tomato.consensus": "" } });
In response, you will receive the following:
{ "acknowledged" : true, "matchedCount" : 204, "modifiedCount" : 13 }
Note that while the query portion of the update matches 204 documents, only 13 documents actually required an update.

*/


db.movieDetails.updateMany({"imdb.votes": {$lt: 10000}, year: {$gte: 2010, $lte:2013}, "tomato.consensus": null}, {$unset: {"tomato.consensus": ""}})