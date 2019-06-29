let router = require('express').Router();
let controller = require('../controllers/authors_controller');

//handle all requests that come like: GET,POST, DELETE, PATCH /api/authors
router.route('/')
    .get(controller.getAllAuthors)
    .post(controller.createAuthors)
    .patch(controller.updateAllAuthors)
    .delete(controller.deleteAllAuthors);
//handle all requests that come like: GET,DELETE, PATCH /api/authors/:id
router.route('/:id')
    .get(controller.getAuthorById)
    .patch(controller.updateAuthorById)
    .delete(controller.deleteAuthorById);

module.exports = router;