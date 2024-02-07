//const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/config.env" })

exports.run = function () {
  mongoose.set("strictQuery", false); 
  mongoose.connect(process.env.DB_LINK)
        .then( function () {
          //mongoose.db("fear_master_api").command({ ping: 1 });
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
        })
        .catch( function (err) {
          console.log(err);
        });
}