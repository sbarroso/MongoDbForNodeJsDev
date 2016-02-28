/*
Final: Lab 4

In this lab, you will implement the method in items.js necessary to support the route for adding a review to a single item. This route is implemented in mongomart.js in the function that begins with this line:

router.post("/item/:itemId/reviews", function(req, res) {
Note that this route uses a url parameter much like that used in the route for the single item view. However, this route supports POST rather than GET requests. To access the form values passed in the POST request, we use the "body" property of the request object passed to the callback function for this route.

To complete the functionality to support adding reviews, you will need to implement the addReview() method in items.js. The comments in this method describe what you need to do to implement it. When you are finished, answer the question below.

In solving this problem you used one of the update methods supported by the Node.js driver. In order to do this you wrote a document that defined the update to make in order to add the review to the item document. We typically refer to this type of document as an update document. The method signature for updateOne() is as follows:

updateOne(filter, update, options, callback)
You pass an update document as the second argument to updateOne() in order to perform an update. Other update methods have a similar signature.
Enter the update document you used to solve this problem in the text area below. Please use double quotes around the keys in this document. Our solution assumes you used the reviewDoc variable defined for you in the addReview() method so the name reviewDoc should occur as a value somewhere in your update document.

*/

???
{$push: {"reviews": reviewDoc}}