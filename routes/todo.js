const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth').authorize;

router.get("/:id",[auth],todoController.getTodo);

router.get("/",[auth],todoController.getAllTodo);

router.put("/:id",[auth],todoController.updateTodo);

router.post("/",[auth],todoController.AddTodo);

router.delete("/:id",[auth],todoController.deleteTodo);

module.exports = router;