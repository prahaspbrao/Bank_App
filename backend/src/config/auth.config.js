const mongoose = require("mongoose");

exports.ConnectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`The Db is connected with ${mongoose.connection.host}`)
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}