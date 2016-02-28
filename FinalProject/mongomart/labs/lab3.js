/*
Final: Lab 3

In this lab, you will implement the method in items.js necessary to support the route for viewing a single item. This route is implemented in mongomart.js in the function that begins with this line:

router.get("/item/:itemId", function(req, res) {
This route is implemented using a parameter for the item as part of the url. In Express, you may define a route with url parameters by placing a ":" before each portion of the url path that should be interpreted by Express as a variable. In this case, :itemId indicates that our callback for this route expects to use the value found in this portion of the url to do its job. You may access url parameters via the params property of the request object passed as the first parameter to our route callback function as we do here:

var itemId = parseInt(req.params.itemId);
To complete the functionality to support the single item view, you will need to implement the getItem() method in items.js. The comments in this method describe what you need to do to implement it. When you are finished, restart mongomart.js application and answer the question below.

Which of the following are true of single item views? Check all that apply.
*/

???
The MongoDB Umbrella (Brown) has an average of four stars from its reviews.
The Track Jacket item view shows an average of three stars based on three reviews.
The timestamp for review specifies year, month, day, hour, minute, and second the review was made (not necessarily in that order). See the review for "MongoDB Umbrella (Brown)" for an example.