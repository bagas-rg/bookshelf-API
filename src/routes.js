const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdhandler,
  deleteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdhandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteByIdHandler,
  },
];

module.exports = routes;
