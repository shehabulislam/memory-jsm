import logo from "./logo.svg";
import "./App.css";
import memories from "./images/memories.png";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Container maxidth="lg">
      <AppBar position="start" color="inherit">
        <Typography variant="h2" align="center">
          {" "}
          Memories
        </Typography>
        <img src={memories} alt="memories-jsm" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems={"stretch"} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
