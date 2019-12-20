import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import WebsiteDesign from './components/website-designer/website-design';
import AdminHome from './components/admin-component/admin-component';
import NotFoundPage from './components/error-component/notFoundPage';
import IOT from './iot/iot';
import BillingSoftwareForm from './billing_software/billing-software-form';
import ResumeForm from './resume-software/resume-form';

// Configure routes

export default (

  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/webdesign" component={WebsiteDesign}/>
    <Route exact path="/myadmin" component={AdminHome}/>
    <Route exact path="/iot" component={IOT}/>
    <Route exact path="/billing" component={BillingSoftwareForm} />
    <Route exact path="/resume" component={ResumeForm} />
    <Route exact path="*" component={NotFoundPage}/>
  </Switch>


);