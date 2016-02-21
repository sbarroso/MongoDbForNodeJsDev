/*
Quiz: Introduction to Sharding

If the shard key is not included in a find operation and there are 4 shards, each one a replica set with 3 nodes, how many nodes will see the find operation?
*/

4

The answer is 4. Since the shard key is not included in the find operation, mongos has to send the query to all 4 of the shards.
Each shard has 3 replica-set members, but only one member of each replica set (the primary, by default) is required to handle the find.
