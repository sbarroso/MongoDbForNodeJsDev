/*
Quiz: Replica Set Internals

Which of the following statements are true about replication. Check all that apply.
*/

Replication supports mixed-mode storage engines. For examples, a mmapv1 primary and wiredTiger secondary.
A copy of the oplog is kept on both the primary and secondary servers.
The oplog is implemented as a capped collection.