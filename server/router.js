module.exports = function(app, db_connection){
    //Handle all requests to /api/books
    app.use('/api/books', require('./api/routes/books_router'));
    //Handle all requets to /api/authors
    app.use('/api/authors', require('./api/routes/authors_router'));
}