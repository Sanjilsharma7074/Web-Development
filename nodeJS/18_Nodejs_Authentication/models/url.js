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
  ]
  },

  {timestamp : true}
)

const URL = mongoose.model("url",urlSchema);


module.exports = URL;