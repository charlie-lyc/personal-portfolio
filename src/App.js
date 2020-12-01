import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          {/* <Route path="/"> 이 <Switch> 내에서 가장 먼저 위치하면 라우팅이 작동되지 않는다. 
              그 이유는 if 분기문을 예를 들어 생각해보면 된다. 
              즉, '/'가 포함되면 'Home'을 라우팅되도록 첫 번째 분기 조건으로 작성해버리면 모든 path가 '/'으로만 분기되어버린다.
              결론은, Root Route('/')가  항상 마지막에 있어야 한다. */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
