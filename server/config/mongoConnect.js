const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_LINK);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error connecting to MongoDB",err);
    }
}

module.exports = connect;