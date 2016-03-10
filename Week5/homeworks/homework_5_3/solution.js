/*
Homework: Homework 5.3

In this problem you will analyze a profile log taken from a mongoDB instance.
To start, please download sysprofile.json from Download Handout link and import it with the following command:

mongoimport -d m101 -c profile < sysprofile.json
Now query the profile data, looking for all queries to the students collection in the database school2,
sorted in order of decreasing latency. What is the latency of the longest running operation to the collection, in milliseconds?

*/

A query that you'll be able to perform is as follows (the projection and .limit() were added to keep it short):

> db.profile.find({ns: "school2.students" }, {_id: 0, millis: 1 } ).sort( { millis: -1 } ).limit(3)
{ "millis" : 15820 }
{ "millis" : 12560 }
{ "millis" : 11084 }
We're looking at the profiling logs, and we've isolated them to just the namespace ("database.collection") that we need,
and we're sorting by millis so that we can see just the top ones. The answer, as shown, is 15,820.