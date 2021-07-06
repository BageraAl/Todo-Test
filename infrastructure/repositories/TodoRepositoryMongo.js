TodoSchema = require('../database/schemas/todo');
const mongoose = require('mongoose');

exports.findById = async todoId =>{
    const todo  = await TodoSchema.findOne({_id:mongoose.Types.ObjectId(todoId)} );
    return todo;
}
exports.deleteById = todoId=>{
    return TodoSchema.findByIdAndRemove(todoId); 
}
exports.add = (userId,todoData) =>{
    const todo = new TodoSchema({title:todoData.title,description:todoData.description,owner:userId});
    return todo.save();
}

exports.updateTodo = async(todoId,newTodo) =>{
        const todo = await TodoSchema.findOne({_id:mongoose.Types.ObjectId(todoId)} )
        todo.description = newTodo.description;
        todo.title = newTodo.title;
        return todo.save();
}