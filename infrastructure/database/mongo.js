const mongoose = require('mongoose');
const db = "mongodb+srv://alaaHboubati:12345alaa@cluster0.ptll8.mongodb.net/test?retryWrites=true&w=majority"



exports.connectDb = async function () {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).
        then(() => {
            console.log(`Connected to ${db}...`)
        });
}