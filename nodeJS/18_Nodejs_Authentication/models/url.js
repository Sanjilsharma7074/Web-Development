const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId:{
    type : String,
    required : true,
    unique : true
  },

  // Original URL
  redirectURL : {
    type : String,
    required : true
  },

  // Total Clicks
  visitHistory : [ 
    {
      timestamp : {
        type : Number}
    } 
  ],
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users"
  }
  },

  {timestamp : true}
)

const URL = mongoose.model("url",urlSchema);


module.exports = URL;