/*
Homework: Homework 7.3

Which of the following statements are true about choosing and using a shard key? Check all that apply.
*/

There must be an index on the collection that starts with the shard key.
MongoDB cannot enforce unique indexes on a sharded collection other than the shard key itself or indexes preferred by the shard key.
Any update that does not contain the shard key will be sent to all shards.