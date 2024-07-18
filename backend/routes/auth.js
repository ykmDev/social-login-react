require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');

router.get('/login/success', (req,res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: 'Successfully authenticated with Google',
            user: req.user,
            //   cookies: req.cookies
        })
    }
});

router.get('/login/failed', (req,res) => {
    res.status(401).json({
        success: false,
        message: 'Failed to authenticate with Google',
    })
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});
// google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

// facebook
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));
router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

module.exports = router;