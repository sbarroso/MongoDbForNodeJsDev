/*
Homework: Multiple selectors in a find() command

What is the title of the movie, rated PG-13 and released in 2013 that won no awards?
Copy and paste the title from the document in our movieDetails collection.
In your answer, do NOT include the quotes that surround the movie title as it is displayed in the Mongo shell.

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data to answer this question.
*/

db.movieDetails.find({year:2013, rated: "PG-13", "awards.wins": 0}).pretty();