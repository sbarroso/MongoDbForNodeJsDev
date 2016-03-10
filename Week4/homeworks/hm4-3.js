/*
Homework: Homework: 4.3

Suppose you are working with a library catalog system containing collections for patrons, publishers, and books. Book documents maintain a field "available" that identifies how many copies are currently available for checkout. There is also a field "checkout" that holds a record of all patrons that are currently borrowing a copy of the book. For example, the document below indicates that the library owns four copies of "Good Book". Three are currently available for checkout. One has been checked out by patron "33457".

{
    _id: 123456789,
    title: "Good Book",
    author: [ "Sam Goodman", "Mike Smith" ],
    published_date: ISODate("2010-09-24"),
    publisher_id: "Smith Publishing",
    available: 3,
    checkout: [ { patron_id: "33457", date: ISODate("2012-10-15") } ]
}
Which of the following is the primary advantage to this design?
*/

Can make atomic updates as books are checked out or turned in.