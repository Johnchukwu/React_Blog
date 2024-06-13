const express = require('express'); //import express
const router = express.Router(); //create a router
const Post = require('../models/Post'); //import the Post model

//get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find(); //get all posts
        res.status(200).json(posts); //send the posts as response
    } catch (error) {
        res.status(404).json({ message: error });
    }
});

//get single post
router.get('/posts/:id', async (req, res) => {
    //extract id from request
    const id = req.params.id;
    try {
        const post = await Post.findById(req.params.id); //get single post
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post); //send the post as response
    } catch (error) {
        res.status(404).json({ message: error });
    }
});

//create a post
router.post('/createPost', async (req, res) => {
    //destructuring the request body
    const { title, content, coverImg, tags } = req.body;
    //create a new post object from post
    const post = new Post({
        title: title,
        content: content,
        coverImg: coverImg,
        tags: tags
    });
    try {
        const savedPost = await post.save(); //save post
        res.status(201).json(savedPost); //send the saved post as response
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

//update a post
router.put('/updatePost/:id', async (req, res) => {
    //extract id from request
    const id = req.params.id;
    //destructuring the request body
    const { title, content, coverImg, tags } = req.body;

    try {
        //find and update post
        const updatedPost = await Post.findByIdAndUpdate(id, {
            title: title,
            content: content,
            coverImg: coverImg,
            tags: tags
        }, { new: true });
        res.status(200).json(updatedPost); //send the updated post as response
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

//delete a post
router.delete('/deletePost/:id', async (req, res) => {
    //extract id from request
    const id = req.params.id;
    try {
        //find and delete post
        const deletedPost = await Post.findByIdAndDelete(id);
        res.status(200).json(deletedPost); //send the deleted post as response
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

//export the router
module.exports = router; //export the router