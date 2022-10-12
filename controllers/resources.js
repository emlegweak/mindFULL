const Resource = require("../models/Resource");

module.exports = {
  //GET resource dashboard (admin)
  getResourceDashboard: async (req, res) => {
    try {
      const resources = await Resource.find({ user: req.user.id });
      res.render("resource-dashboard.ejs", { resources: resources, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  //GET resource feed (all users)
  getResourceFeed: async(req,res) =>{
    try {
      const resources = await Resource.find().sort({ createdAt: "desc" }).lean();
      res.render("resources.ejs", {resources:resources})
    } catch (error) {
      console.log(err);
    }
  },
  //GET individual resource by id (all users)
  getResource: async (req, res) => {
    try {
      const resource = await Resource.findById(req.params.id);
      res.render("resource.ejs", { resource: resource, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  //POST create new resource (admin)
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
  //GET resource to update (admin)
  editResource: async (req,res) =>{
    try {
      let resource = await Resource.findById(req.params.id);
      res.render("edit.ejs", {resource: resource})
    } catch (error) {
      console.log(error)
    }
  },
  updateResource: async(req,res) =>{
    try {
      let resource = await Resource.findById(req.params.id);
    await Resource.findByIdAndUpdate(resource.id, {
      title: req.body.title, 
      caption: req.body.caption,
    })
      console.log("Resource updated")
      res.redirect(`/resource/resource-dashboard`)
    } catch (error) {
      console.log(error)
    }
  },
  //DELETE resource (admin)
  deleteResource: async (req, res) => {
    try {
      // Find resource by id
      let resource = await Resource.findById({ _id: req.params.id });
      // Delete resource from db
      await Resource.deleteOne({ _id: req.params.id });
      console.log("Deleted Resource");
      res.redirect("/resource/resource-dashboard");
    } catch (err) {
      res.redirect("/resource/resource-dashboard");
    }
  },
};
