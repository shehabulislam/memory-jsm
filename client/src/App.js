import memories from "./images/memories.png";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";

import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./hooks/useFetch";
import { populatePosts } from "./store/posts";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const { data, loading, posts } = useFetch("http://localhost:5000/posts");

  useEffect(() => {
    dispatch(populatePosts(data));
  }, [data]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories-jsm" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems={"stretch"} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
