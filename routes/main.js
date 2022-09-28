const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const homeController = require("../controllers/home")
const postsController = require("../controllers/posts")
const resourcesController = require('../controllers/resources')
const { ensureAuth, ensureGuest } = require("../middleware/auth")
const passwordResetController = require('../controllers/passwordReset')

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/about", homeController.getAbout)
router.get("/dashboard", ensureAuth, postsController.getDashboard)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/logout", authController.logout)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
router.get('/recover', passwordResetController.getPasswordRecover)
router.post('/recover', passwordResetController.postPasswordRecover)
router.get('/reset/:token', passwordResetController.getPasswordReset)
router.post('/reset/:token', passwordResetController.postPasswordReset)
router.get("/resources", ensureAuth, resourcesController.getResourceFeed)


module.exports = router
