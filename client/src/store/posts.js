import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    postAdd: (posts, action) => {
      posts.push(action.payload);
    },
    postUpdate: (posts, action) => {
      return posts.map((post) => (post._id === action.payload?._id ? action.payload : post));
    },
    postDelete: (posts, action) => {
      return posts.filter((post) => post._id !== action.payload);
    },
    populatePosts: (posts, action) => {
      return action.payload;
    },
  },
});

export const getPosts = (state) => {
  return state.posts;
};

export const { postAdd, postUpdate, postDelete, populatePosts } = postSlice.actions;
export default postSlice.reducer;
