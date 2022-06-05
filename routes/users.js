var express = require('express');
var router = express.Router();
var {getUsers , addUser , deleteUser, getUserByIdent} = require( "../services/user-service");

/* GET users listing. */
router.get('/', getUsers);

/* GET user by ID. */
router.get('/get-user/:ident', getUserByIdent);

/* Post user. */
router.post('/', addUser);

/* delete user. */
router.delete('/:ident',deleteUser);

module.exports = router;
