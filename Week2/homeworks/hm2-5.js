/*
Homework: Equality queries on arrays

How many documents in our movieDetails collection are listed as falling into just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data to answer this question.
*/

db.movieDetails.find({ "genres": ["Comedy", "Crime"] }).count()