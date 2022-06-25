import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with that id");
  }

  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
  res.send(updatePost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with that id");
  }
  await PostMessage.findByIdAndDelete(_id);
  res.send({ message: "post deleted succesfully!" });
};

export const likePost = async (req, res) => {
  const { id:_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with that id");
  }
  const post = await PostMessage.findById(_id);
  const updatePost = await PostMessage.findByIdAndUpdate(_id, { likePost: post.likePost + 1 }, { new: true });
  res.send(updatePost);
};
