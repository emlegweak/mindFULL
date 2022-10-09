const Resource = require("../models/Resource");

module.exports = {
  getResourceDashboard: async (req, res) => {
    try {
      const resources = await Resource.find({ user: req.user.id });
      res.render("resource-dashboard.ejs", { resources: resources, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getResourceFeed: async(req,res) =>{
    try {
      const resources = await Resource.find().sort({ createdAt: "desc" }).lean();
      res.render("resources.ejs", {resources:resources, user: req.user})
    } catch (error) {
      console.log(err);
    }
  },
  getResource: async (req, res) => {
    try {
      const resource = await Resource.findById(req.params.id);
      res.render("resource.ejs", { resource: resource, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createResource: async (req, res) => {
    try {
      await Resource.create({
        title: req.body.title,
        caption: req.body.caption,
        user: req.user.id,
      });
      console.log("Resource has been added!");
      res.redirect("/resource/resource-dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteResource: async (req, res) => {
    try {
      // Find post by id
      let resource = await Resource.findById({ _id: req.params.id });
      // Delete post from db
      await Resource.remove({ _id: req.params.id });
      console.log("Deleted Resource");
      res.redirect("/resource/resource-dashboard");
    } catch (err) {
      res.redirect("/resource/resource-dashboard");
    }
  },
};
