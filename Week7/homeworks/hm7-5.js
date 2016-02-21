/*
Homework: Homework 7.5

In this homework you will build a small replica set on your own computer. We will check that it works with validate.js,
which you should download from the Download Handout link. 

Create three directories for the three mongod processes. 

On unix or mac, this could be done as follows:

mkdir -p /data/rs1 /data/rs2 /data/rs3

Now start three mongo instances as follows. Note that are three commands. The browser is probably wrapping them visually.

mongod --replSet m101 --logpath "1.log" --dbpath /data/rs1 --port 27017 --smallfiles --oplogSize 64 --fork 
mongod --replSet m101 --logpath "2.log" --dbpath /data/rs2 --port 27018 --smallfiles --oplogSize 64 --fork
mongod --replSet m101 --logpath "3.log" --dbpath /data/rs3 --port 27019 --smallfiles --oplogSize 64 --fork

Windows users: Omit -p from mkdir. Also omit --fork and use start mongod with Windows compatible paths (i.e. back slashes "\") for the --dbpath argument (e.g; C:\data\rs1). 

Now connect to a mongo shell and make sure it comes up
mongo --port 27017

Now you will create the replica set. Type the following commands into the mongo shell:
config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017"},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
         };
rs.initiate(config);


At this point, the replica set should be coming up. You can type
rs.status()
to see the state of replication. 

Now install and run validate.js to confirm that it works.
npm install
node validate.js
Validate connects to your local replica set and checks that it has three nodes. Type the validation code below.
*/