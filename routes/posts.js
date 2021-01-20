const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// All the posts
router.get('/', async (req, res) => {
    try {
        const AllPosts = await Post.find();
        res.json(AllPosts);
    } catch(err) {
        res.json( { msg: err });
    }
});

// Submit the post
router.post('/', async(req,res) =>{
	const post = new Post({
		title: req.body.title,
		description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json( { msg: err });
    }

});

//Specific Post
router.get('/:id', async (req, res) => {
    try {
        const currentPost = await Post.findById(req.params.id);
        res.json(currentPost);
    } catch(err) {
        res.json({ msg: err })
    }
});


// Delete a particular post
router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.id })
        res.json(removedPost);
    } catch(err) {
        res.json( { msg: err });
    }
})

//Update a post
router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.id }, 
            { $set: { title: req.body.title} }
        )
        res.json(updatedPost);

    } catch(err) {
        res.json({ msg: err });

    }
})

module.exports = router;