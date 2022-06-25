import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
// import { ThumbUpAltIcon } from "@mui/material/icons";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import axios from "axios";
import { postDelete, postUpdate } from "../../../store/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      dispatch(postDelete(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/posts/like/${id}`);
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "shite" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleLike(post._id)}>
          <ThumbUpIcon fontSize="small"></ThumbUpIcon>Like {post.likePost}
        </Button>
        <Button size="small" color="primary" onClick={() => handleDelete(post._id)}>
          <DeleteIcon fontSize="small"></DeleteIcon>Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
