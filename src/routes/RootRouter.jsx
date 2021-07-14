import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Select from 'pages/Select';
import Flights from 'pages/Flights';
import NotFound from 'pages/NotFound';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/select" component={Select} />
        <Route exact path="/flights" component={Flights} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default RootRouter;
