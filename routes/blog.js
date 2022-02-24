const express = require('express');
const { route } = require('express/lib/application');
const { query } = require('../data/database');

const db = require('../data/database');

const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/posts');
});

router.get('/posts', async function(req, res) {
    const [posts] = await db.query('SELECT * FROM posts ');
    res.render('posts-list', {posts:posts});
});

router.get('/new-post', async function(req, res){
    const [authors] = await db.query('SELECT * FROM authors');

    res.render('create-post', {authors:authors});
});

router.get('/post-detail/:Id', async function(req, res){
    const postDetail = req.params.Id;
    let query = 'select * from posts inner join authors on posts.author_id = authors.Id where posts.Id = ' + postDetail;
    const [[result]] = await db.query(query);
    res.render('post-detail', {result : result});
});

router.get('/remove/:Id', async function(req, res){
    toRemovePostId = req.params.Id;
    let query = 'delete from posts where Id = ' + toRemovePostId;
    await db.query(query);
    res.redirect('/posts');
});

router.get('/edit-post/:Id', async function(req, res){
    toEditPostId = req.params.Id;
    res.render('update-post', {Id:toEditPostId});
});

router.post('/update-post/:Id', async function(req, res){
    const toUpdatePostId = req.params.Id;

    // let query = 'update posts set title = ' + data[0] + ', summary = ' + data[1] +  ' , body = ' + data[2] + ' where Id = ' + toUpdatePostId;
    let query = 'update posts set title = ?, summary = ?, body = ? where Id = ? ';
    await db.query(query,[ req.body.title,req.body.summary,req.body.content,toUpdatePostId]);
    res.redirect('/posts');
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
