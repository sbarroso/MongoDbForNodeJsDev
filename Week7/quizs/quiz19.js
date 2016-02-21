/*
Quiz: Choosing a Shard Key

You are building a facebook competitor called footbook that will be a mobile social network of feet. You have decided that your primary data structure for posts to the wall will look like this:
{'username':'toeguy',
     'posttime':ISODate("2012-12-02T23:12:23Z"),
     "randomthought": "I am looking at my feet right now",
     'visible_to':['friends','family', 'walkers']}
Thinking about the tradeoffs of shard key selection, select the true statements below.
*/

Choosing posttime as the shard key will cause hotspotting as time progresses.
Choosing username as the shard key will distribute posts to the wall well across the shards.
Choosing visible_to as a shard key is illegal.