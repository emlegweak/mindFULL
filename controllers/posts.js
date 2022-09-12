const Post = require("../models/Post");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("dashboard.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
      res.render("dashboard.ejs", { post: post, user: req.user })
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      await Post.create({
        status: req.body.status,
        hoursOfSleep: req.body.hoursOfSleep,
        gratitude: req.body.gratitude,
        lookingForward: req.body.lookingForward,
        selfLove: req.body.selfLove,
        caption: req.body.caption,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};
