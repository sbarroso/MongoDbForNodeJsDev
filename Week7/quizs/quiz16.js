/*
Quiz: Building a Sharded Environment

If you want to build a production system with two shards, each one a replica set with three nodes, how may mongod processes must you start?
*/

9: 6 from the shards (2 replica sets each with 3 nodes) and 3 from config servers (recommended for production systems)