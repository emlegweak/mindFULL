const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  status:{
    type:String,
    required:true,
    enum:["I'm doing really great!", "I'm doing pretty good.", "I'm doing okay, I guess.", "I'm starting to struggle.", "I'm having a really hard time.", "I need to reach out for support."],
  },
  hoursOfSleep:{
    type: String,
    required:true,
    enum:["<1", "1-4", "5-8", "9-12", "12>" ]
  },
  gratitude:{
    type:String, 
  },
  lookingForward:{
    type: String,
  },
  selfLove:{
    type:String,
  },
  caption: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.methods.formatDate = function(dateProperty){
  const newDate = new Date(this[dateProperty])
  let formattedDate = `${newDate.getFullYear()}-`;
    formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}-`;  
    formattedDate += `${`0${newDate.getDate()}`.slice(-2)}`;        
  return formattedDate;
}

module.exports = mongoose.model("Post", PostSchema);
