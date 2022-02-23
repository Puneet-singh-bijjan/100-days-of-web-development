const express = require('express');

const db = require('../data/database');

const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/posts');
});

router.get('/posts', async function(req, res) {
    const [posts] = await db.query('SELECT * FROM posts');
    res.render('posts-list', {posts:posts});
});

router.get('/new-post', async function(req, res){
    const [authors] = await db.query('SELECT * FROM authors');

    res.render('create-post', {authors:authors});
});

router.post('/new-post', async function(req, res){
    const data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        +req.body.author
    ];
    await db.query('INSERT INTO posts (title, summary, body, author_id) VALUES (?)', [data]);
    res.redirect('/posts');
});

module.exports = router;
