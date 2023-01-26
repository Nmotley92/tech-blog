const router = require('express').Router();
const { Post, User, Comment } = require('../models');


// GET find all blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    
    res.render('homepage', {

      posts,
      loggedIn: req.session.loggedIn,
      

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'comment_date'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('single-post', {
      ...post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.render('homepage');
    return;
  }

  res.render('login');
});

// GET signup
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// GET dashboard 
router.get('/dashboard', async (req, res) => {
  // if user is not logged in, redirect to login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    const postData = await Post.findAll({
      where: {
        posted_by: req.session.username,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get new post form
router.get('/new-post', async (req, res) => {


  // if user is not logged in, redirect to login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('new-post', {
    loggedIn: req.session.loggedIn,
  });
});



module.exports = router;
