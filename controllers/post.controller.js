import { Post } from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.all();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

export const createPost = async (req, res) => {
  try {
    const { usuario, url, descripcion } = req.body;
    const post = await Post.create({ usuario, url, descripcion });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.update(id);
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};
