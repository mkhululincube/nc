import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./header.module.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../body/Home";
import Contact from "../body/Contact";

function NavItems() {
  return (
    <div>
      <Button>Test bootstrap</Button>
      <div className="testing">testing</div>
      <div className={styles.testing}>modules</div>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default NavItems;
