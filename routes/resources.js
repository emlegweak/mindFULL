const express = require("express");
const router = express.Router();
const resourcesController = require("../controllers/resources");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/resource-dashboard", ensureAuth, resourcesController.getResourceDashboard)

router.get("/:id", ensureAuth, resourcesController.getResource);

router.post("/createResource", resourcesController.createResource);

router.delete("/deleteResource/:id", resourcesController.deleteResource);

module.exports = router;
