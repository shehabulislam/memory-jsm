import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
// import { ThumbUpAltIcon } from "@mui/material/icons";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "shite" }} size="small" onClick={() => {}}>
          <MoreHorizIcon />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpIcon fontSize="small"></ThumbUpIcon>Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small"></DeleteIcon>Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
