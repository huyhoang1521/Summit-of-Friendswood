import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Lease from "./pages/Lease";

import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const sections = [
  { title: "Lease", url: "/lease" },
  { title: "Gallery", url: "/gallery" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Header title="Summit of Friendswood" sections={sections} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/lease" exact component={Lease} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
