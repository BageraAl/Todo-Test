const mongoose = require('mongoose');
const db = "string_token_for_your_database";



exports.connectDb = async function () {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).
        then(() => {
            console.log(`Connected to ${db}...`)
        });
}