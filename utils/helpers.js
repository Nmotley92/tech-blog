module.exports = {

  ensureAuthenticated: (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    }
    res.redirect('/login');
},
};