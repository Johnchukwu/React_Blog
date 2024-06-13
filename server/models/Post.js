const mongoose = require('mongoose');   //import mongoose
//create a schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    coverImg: String,
    tags: [String],
    likes: {
        type: Number,
        default: 0,
    }
},

      {timestamps: true})
      
  //create a model
    const Post = mongoose.model('Post', postSchema);
    //export the model
    module.exports = Post;