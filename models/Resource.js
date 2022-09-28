const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  title:{
    type: String, 
    required: true,
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

ResourceSchema.methods.formatDate = function(dateProperty){
  const newDate = new Date(this[dateProperty]) 
  let formattedDate = `${`0${newDate.getMonth() + 1}`.slice(-2)}-`
    formattedDate += `${`0${newDate.getDate()}`.slice(-2)}-`
    formattedDate += `${newDate.getFullYear()}`        
  return formattedDate;
}

module.exports = mongoose.model("Resource", ResourceSchema);
