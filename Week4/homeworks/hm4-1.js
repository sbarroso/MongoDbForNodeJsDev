/*
Homework: Homework: 4.1

Please review the data model for the Crunchbase companies data set. The document from this collection for Facebook is attached in the handout for convenience. Documents in this collection contain several array fields including one for "milestones".

Suppose we are building a web site that will display companies data in several different views. Based on the lessons in this module and ignoring other concerns, which of the following conditions favor embedding milestones (as they are in the facebook.json example) over maintaining milestones in a separate collection. Check all that apply.

Note: Schema design is as much an art as a science. If you get the answer wrong on your first attempt. Please visit the forum to discuss with your fellow students.
*/

The number of milestones for a company rarely exceeds 10 per year.

One frequently displayed view of our data displays company details such as the "name", "founded_year", "twitter_username", etc. as well as milestones.