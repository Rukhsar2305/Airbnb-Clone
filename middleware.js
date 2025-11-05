module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        console.log(req.user);
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};