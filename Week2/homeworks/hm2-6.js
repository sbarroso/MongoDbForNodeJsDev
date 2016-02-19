/*
Homework: Array operators

As a follow up to the previous question, how many documents in the movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed?

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data to answer this question.
*/

db.movieDetails.find({ "genres": {$all: ["Comedy", "Crime"] } }).count()