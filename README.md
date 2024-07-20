# BookstoreDatabaseApi

Project: Library Management System

Build a REST API to manage books and authors.
Each book should have a reference to an author.
Implement CRUD operations for both books and authors.
Use Mongoose for data modeling and MongoDB for the database.
Use Express for the REST API.
Include population of author data when fetching book details.

Start with establishing a database schema. After that work on the following endpoints:

Authors:
POST /authors - Create a new author
GET /authors - Get all authors
GET /authors/:id - Get an author by ID
PUT /authors/:id - Update an author by ID
DELETE /authors/:id - Delete an author by ID

Books:
POST /books - Create a new book
GET /books - Get all books (with author data populated)
GET /books/author/:authorId - Get an author specific books
GET /books/:id - Get a book by ID (with author data populated)
PUT /books/:id - Update a book by ID
DELETE /books/:id - Delete a book by ID

