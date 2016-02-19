/*
Homework: Matching a specific array element

What is the title of the first movie returned for a query that selects all movies listing "Sweden" second among countries of origin.
Please copy and paste the title from the document in which it appears. Do not include the quotes around the title in your answer.
(You may want to use the limit() method to restrict the returned documents to just the first one. See the MongoDB documentation for details.)

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data to answer this question.
*/

db.movieDetails.find({ "countries.1": "Sweden" }).limit(1)