import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import FileBase from "react-file-base64";

import useStyles from "./styles";
const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });

  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing" : "Createing"} a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData({ ...postData, creator: e.target.value })} value={postData.creator} />
        <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({ ...postData, title: e.target.value })} value={postData.title} />
        <TextField name="message" variant="outlined" label="Message" fullWidth onChange={(e) => setPostData({ ...postData, message: e.target.value })} value={postData.message} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} value={postData.tags} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button className={classes.buttonSubmit} color="secondary" variant="contained" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
