import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Hello from Posts" });
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Create a post
router.route("/").post(async (req, res) => {
  try {
    const { name, photo, prompt } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      photo: photoUrl.url,
      prompt,
    });

    res.status(201).json({ data: newPost, success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
