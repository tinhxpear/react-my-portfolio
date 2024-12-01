import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../common/Header";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </>
  );
};

export default Pages;
