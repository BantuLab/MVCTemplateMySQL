let router = require('express').Router();
let controller = require('../controllers/books_controller');

//handle all requests that come like: GET,POST, DELETE, PATCH /api/books
router.route('/')
    .get(controller.getAllBooks)
    .post(controller.createBooks)
    .patch(controller.updateAllBooks)
    .delete(controller.deleteAllBooks);
//handle all requests that come like: GET,DELETE, PATCH /api/books/:id
router.route('/:id')
    .get(controller.getBookById)
    .patch(controller.updateBookById)
    .delete(controller.deleteBookById);

module.exports = router;