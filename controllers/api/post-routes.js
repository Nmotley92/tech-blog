const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const ensureAuthenticated  = require('../../utils/auth');



// create post routes
router.post('/create', ensureAuthenticated, async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        post_date: new Date(),
        posted_by: req.session.username,
      });
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



// PUT route for updating posts
router.post('/update/:id', ensureAuthenticated, async (req, res) => {
    try {
      const updatedPost = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
          post_date: new Date()
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
      res.redirect(`/dashboard`);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// DELETE route for deleting posts

router.delete('/:id', ensureAuthenticated, async (req, res) => {
    try {
        const postData = await Post.destroy({
        where: {
            id: req.params.id,
        },
        });

        if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

// POST route for creating a new comment
router.post('/create/comment/:id' , ensureAuthenticated ,async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.params.id,
        commented_by: req.session.username,
        comment_date: new Date().toLocaleString(),
      });

      

      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// PUT route for updating comments
router.put('/update/comment/:id', ensureAuthenticated, async (req, res) => {
    try {
      const updatedComment = await Comment.update(
        {
          comment_text: req.body.comment_text,
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
      const post_id = await Comment.findOne({
        where: {
          id: req.params.id
        }
      });
      res.redirect(`/post/${post_id.post_id}`);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// DELETE route for deleting comments
router.delete('/delete/comment/:id', ensureAuthenticated, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      const post_id = await Comment.findOne({
        where: {
          id: req.params.id
        }
      });
      res.redirect(`/post/${post_id.post_id}`);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;