/*
Quiz: Network Errors

What are the reasons why an application may receive an error back even if the write was successful. Check all that apply.
*/

The network TCP connection between the application and the server was reset after the server received a write but before a response could be sent.
The MongoDB server terminates between receiving the write and responding to it.
The network fails between the time of the write and the time the client receives a response to the write.