import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "../theme";
import Home from "../routes/home/Home";
import About from "../routes/about/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
