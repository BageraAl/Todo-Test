const UserSchema = require('../database/schemas/user');
const mongoose = require('mongoose');

exports.findById = async function (userId){
   const user = await UserSchema.findOne({_id:mongoose.Types.ObjectId(userId)});
   return user;
}
exports.updateUser = async(updatedUser)=>{
    const user = await UserSchema.findOne({_id:mongoose.Types.ObjectId(updatedUser._id)});
    user.email = updatedUser.email;
    user.password = updatedUser.password;
    user.name = updatedUser.name;
    user.todos = updatedUser.todos;
    return user.save();
}

exports.getAllTodo = async userId =>{
    const user = await UserSchema.findOne({_id:mongoose.Types.ObjectId(userId)})
                                 .populate('todos');
    return user.todos;
}
exports.getTodo = async(userId,todoId)=>{
    const user = await UserSchema.findOne({_id:mongoose.Types.ObjectId(userId)})
                                 .populate('todos');
    const todo = user.todos.filter(todo => todo._id.toString() === todoId.toString());
    return todo;
}
