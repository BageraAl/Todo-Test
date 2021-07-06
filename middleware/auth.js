exports.authorize = async(req,res,next)=>{
    const id = req.header("UserId");
    if (!id) return res.status(401).send("User Id needs to be sent");
    req.userId = id;
    next();
}