/*
Homework: Homework: 3.3

This application depends on the companies.json dataset distributed as a handout with the findAndCursorsInNodeJSDriver lesson. You must first import that collection.
Please ensure you are working with an unmodified version of the collection before beginning this exercise.

To import a fresh version of the companies.json data, please type the following:

mongoimport -d crunchbase -c companies companies.json
If you have already mongoimported this data you will first need to drop the crunchbase database in the Mongo shell. Do that by typing the following two commands,
one at a time, in the Mongo shell:

use crunchbase
db.dropDatabase()
The code in the attached is complete with the exception of the queryDocument() function. As in the lessons, the queryDocument() function builds an object that will
be passed to find() to match a set of documents from the crunchbase.companies collection.

For this assignment, please complete the queryDocument() function as described in the TODO comments you will find in that function.

Once complete, run this application by typing:

node buildingQueryDocuments.js
When you are convinced you have completed the application correctly, please enter the average number of employees per company reported in the output. Enter only
the number reported. It should be three numeric digits.

As a check that you have completed the exercise correctly, the total number of unique companies reported by the application should equal 42.

If the grading system does not accept the first solution you enter, please do not make further attempts to have your solution graded without seeking some help
in the discussion forum.
*/

function queryDocument(options) {

    var query = {
        "tag_list": {"$regex": "social-networking"},
    };

    if (("firstYear" in options) && ("lastYear" in options)) {
        query.founded_year = { "$gte": options.firstYear, "$lte": options.lastYear };
    } else if ("firstYear" in options) {
        query.founded_year = { "$gte": options.firstYear };
    } else if ("lastYear" in options) {
        query.founded_year = { "$lte": options.lastYear };
    }

    if ("city" in options) {
        query["offices.city"] = options.city;
    }
        
    return query;
    
}