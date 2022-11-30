//blog routes

const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

//call on home
router.get("/blogs", blogController.blog_index);

router.get("/blogs:id", blogController.blog_details);

//create
router.get("/blogs/create", blogController.blog_create_get);

//POST
router.post("/blogs", blogController.blog_create_post);
//delete
router.delete("/blogs/:id", blogController.blog_create_delete);

module.exports = router;
