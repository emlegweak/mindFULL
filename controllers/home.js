module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs", {user: req.user});
  },
  getAbout: (req, res) => {
    res.render("about.ejs", {user:req.user});
  },
};
