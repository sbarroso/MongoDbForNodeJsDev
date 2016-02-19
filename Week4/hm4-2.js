/*
Homework: Homework: 4.2

Suppose you are working with a set of categories defined using the following tree structure. "Science" is a sub-category of "Books"; "Chemistry" and "Physics" are sub-categories of "Science"; and "Classical Mechanics" and "Quantum Mechanics" are sub categories of "Physics".

Books
    Science
        Chemistry
        Physics
            Classical Mechanics
            Quantum Mechanics
For this tree, each node is represented by a document in a collection called categories.

Which of the following schemas will make it possible to find() all descendants of a category using a single query. For example, all descendants of "Science" are "Chemistry", "Physics", "Classical Mechanics", and "Quantum Mechanics".

A)

db.categories.insertOne({"_id": "Books", "parent": 0, "left": null, "right": "Science"})
db.categories.insertOne({"_id": "Science", "parent": "Books", "left": "Chemistry", "right": "Physics"})
db.categories.insertOne({"_id": "Chemistry", "parent": "Science", "left": null, "right": null})
db.categories.insertOne({"_id": "Physics", "parent": "Science", "left": "Classical Mechanics", "right": "Quantum Mechanics"})
db.categories.insertOne({"_id": "Classical Mechanics", "parent": "Physics", "left": null, "right": null})
db.categories.insertOne({"_id": "Quantum Mechanics", "parent": "Physics", "left": null, "right": null})
B)

db.categories.insertOne({"_id": "Quantum Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
db.categories.insertOne({"_id": "Classical Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
db.categories.insertOne({"_id": "Physics", "ancestors": ["Books", "Science"], "parent": "Science"})
db.categories.insertOne({"_id": "Chemistry", "ancestors": ["Books", "Science"], "parent": "Science"})
db.categories.insertOne({"_id": "Science", "ancestors": ["Books"], "parent": "Books"})
db.categories.insertOne({"_id": "Books", "ancestors": [], "parent": null})
C)

db.categories.insertOne({"_id": "Classical Mechanics", "parent": "Physics"})
db.categories.insertOne({"_id": "Quantum Mechanics", "parent": "Physics"})
db.categories.insertOne({"_id": "Physics", "parent": "Science"})
db.categories.insertOne({"_id": "Chemistry", "parent": "Science"})
db.categories.insertOne({"_id": "Science", "parent": "Books"})
db.categories.insertOne({"_id": "Books", "parent": null})
D)

db.categories.insertOne({"_id": "Classical Mechanics", "children": []})
db.categories.insertOne({"_id": "Quantum Mechanics", "children": []})
db.categories.insertOne({"_id": "Physics", "children": ["Classical Mechanics", "Quantum Mechanics"]})
db.categories.insertOne({"_id": "Chemistry", "children": []})
db.categories.insertOne({"_id": "Science", "children": ["Physics", "Chemistry"]})
db.categories.insertOne({"_id": "Books", "children": ["Science"]})
E)

db.categories.insertOne({"_id": "Classical Mechanics", "children": [], "descendants": []})
db.categories.insertOne({"_id": "Quantum Mechanics", "children": [], "descendants": []})
db.categories.insertOne({"_id": "Physics", "children": ["Classical Mechanics", "Quantum Mechanics"], "descendants": ["Classical Mechanics", "Quantum Mechanics"] })
db.categories.insertOne({"_id": "Chemistry", "children": [], "descendants": []})
db.categories.insertOne({"_id": "Science", "children": ["Chemistry", "Physics"], "descendants": ["Chemistry", "Physics", "Classical Mechanics", "Quantum Mechanics"]})
db.categories.insertOne({"_id": "Books", "children": ["Science"], "descendants": ["Science", "Chemistry", "Physics", "Classical Mechanics", "Quantum Mechanics"]})
*/

B