//  adds user authentication to the application
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
    }

    module.exports = ensureAuthenticated;