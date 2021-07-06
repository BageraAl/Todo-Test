const UserRepos = require('../infrastructure/repositories/UserRepositoryMongo');
const TodoRepos = require('../infrastructure/repositories/TodoRepositoryMongo');
const UseCases = require('../infrastructure/business/usecases');
exports.AddTodo = async(req,res)=>{
    const todoData = {
        title:req.body.title,
        description:req.body.description
    };
    try{
        await UseCases.addTodo(UserRepos,TodoRepos,req.userId,todoData);
        return res.status(201).send("Todo has been added sucessfully");
    }catch(err){
                console.log(err);
               res.status(401).send("An error has occured, couldln't add todo");
    }
}

exports.deleteTodo = async(req,res)=>{
    const todoId = req.params.id;
    try{
        await UseCases.deleteTodo(UserRepos,TodoRepos,req.userId,todoId);
        return res.status(204).send("Todo has been deleted sucessfully");

    }catch(err){
        console.log(err);
        res.status(401).send("An error has occured, couldln't delete todo");
    }
}

exports.updateTodo = async(req,res)=>{
    const todoId = req.params.id;
    const newTodo = {
        title:req.body.title,
        description:req.body.description
    };
    try{
       await UseCases.updateTodo(TodoRepos,todoId,newTodo);
       return res.status(204).send("Todo has been updated sucessfully");

       
    }catch(err){
        res.status(401).send("An error has occured, couldln't update todo");

    }
}

exports.getTodo = async(req,res)=>{
    const todoId = req.params.id;
    const todo = await UseCases.getTodo(UserRepos,req.userId,todoId);
    if (!todo) return res.status(404).send("Todo was not found");
    res.status(200).send(todo);

    
}

exports.getAllTodo = async(req,res)=>{
        const todos = await UseCases.getAllTodo(UserRepos,req.userId);
        res.status(200).send(todos);

    
}