/*
Quiz: Lab 6 (Challenge)

Note: This problem is ungraded. It represents an interesting challenge and is more difficult than the lab exercises
because it requires a little additional learning on your part.
Feel free to discuss the problem in the discussion forum, but please don't just give away your solution.

In this lab, you will implement the method in cart.js necessary to for determining whether or not an item is already in a user's cart.
MongoMart uses this method to determine how to update the cart when an item is added.
If the "Add to Cart" button is used to add an item from the single item view page, MongoMart will add a new item
to the cart if that item is not already present in the cart. If it is already present, MongoMart will update the count by one.
The relevant route in mongomart.js is implemented in the function that begins with this line:

router.post("/user/:userId/cart/items/:itemId", function(req, res) {
The method you will implement in cart.js is: itemInCart(). The comments in this method describe what you need to do to implement it.
When you are finished, restart mongomart.js application and test that you can add items to the cart.
You won't be able to update quantities nor will adding an item already present in the cart update the quantity for that item until you complete the next lab.
*/
