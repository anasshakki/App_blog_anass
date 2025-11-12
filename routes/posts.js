const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.render('index', { posts: posts });
  } catch (e) {
    res.send('Erreur');
  }
});

router.get('/new', (req, res) => {
  res.render('new-post');
});

router.post('/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await post.save();
    res.redirect('/');
  } catch (e) {
    res.render('new-post', { post: post, error: e });
  }
});

// CETTE PARTIE MANQUAIT PROBABLEMENT
router.get('/edit/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('edit-post', { post: post });
  } catch (e) {
    res.redirect('/');
  }
});

// CETTE PARTIE MANQUAIT PROBABLEMENT
router.put('/posts/:id', async (req, res) => {
  let post;
  try {
    post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.redirect('/');
  } catch (e) {
    if (post) {
      res.render('edit-post', { post: post, error: e });
    } else {
      res.redirect('/');
    }
  }
});

// CETTE PARTIE MANQUAIT PROBABLEMENT
router.delete('/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (e) {
    res.redirect('/');
  }
});

module.exports = router;