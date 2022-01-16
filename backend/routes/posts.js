import express from "express";

import { getPosts, createPost } from "../controllers/controller-posts.js";

const router = express.Router();

// http://localhost:4000/posts
router.get("/", getPosts); // getPosts is from contorller-posts.js kind of like helper function 
router.get("/", createPost);

export default router;