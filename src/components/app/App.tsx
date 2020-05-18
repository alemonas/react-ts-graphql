import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";

import theme from "../../theme";
import Header from "../common/Header";
import PageNotFound from "../PageNotFound";

const Home = lazy(() => import("../../routes/home/Home"));
const About = lazy(() => import("../../routes/about/About"));

const App: React.FC = () => (
  <Router history={createBrowserHistory()}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Suspense fallback={"loading..."}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about-us">
              <About />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </ThemeProvider>
  </Router>
);

export default App;
