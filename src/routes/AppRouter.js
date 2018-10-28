import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ResearchPage from '../components/ResearchPage';
import FacilitiesPage from '../components/FacilitiesPage';
import PeoplePage from '../components/PeoplePage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    // only expects child length of 1

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/research" component={ResearchPage} />
                <Route path="/facilities" component={FacilitiesPage} />
                <Route path="/people" component={PeoplePage} />
                <Route path="/contact" component={ContactPage} />
                {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params*/}
                <Route component={NotFoundPage} /> {/* do not need path*/}

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;



