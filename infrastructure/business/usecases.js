exports.addTodo = async(UserRepos,TodoRepos,userId,todoData)=>{
    const addedTodo = await TodoRepos.add(userId,todoData);
    const user = await UserRepos.findById(userId);
    user.todos.push(addedTodo);
    return  UserRepos.updateUser(user);
}

exports.deleteTodo = async(UserRepos,TodoRepos,userId,todoId)=>{
    const deletedTodo = await TodoRepos.deleteById(todoId);
    const user = await UserRepos.findById(userId);
    user.todos.pull(todoId);
    return UserRepos.updateUser(user);
}
exports.updateTodo = async(TodoRepos,todoId,newTodo)=>{
    return TodoRepos.updateTodo(todoId,newTodo);

}

exports.getTodo = async(UserRepos,userId,todoId)=>{
    const todo = await UserRepos.getTodo(userId,todoId);
    return todo;
}

exports.getAllTodo = async(UserRepos,userId)=>{
    const todos = await UserRepos.getAllTodo(userId);
    return todos;
}

