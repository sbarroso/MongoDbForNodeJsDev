/*
Quiz: Review of Implications of Replication

If you set w=4 on a MongoClient and there are only three nodes in the replica set, how long will you wait in PyMongo
for a response from an insert if you don't set a timeout?

One thing to remember is that the driver will check, upon attempting to write, whether or not its
write concern is valid. It will error if, for example, w=4 but there are 3 data-bearing replica set
members. This will happen quickly in both the Java and pymongo drivers. Reading with an invalid readPreference will take longer, but will also result in an error.
Be aware, though, that this behavior can vary a little between drivers and between versions.
*/

You will get an immediate error