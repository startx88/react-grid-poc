import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Dashboard = lazy(() => import('../pages/Dashbaord'))
const Toolkit = lazy(() => import('../pages/Toolkit'))
const Documents = lazy(() => import('../pages/Documents'))
const Contacts = lazy(() => import('../pages/Contacts'))
const ContactUs = lazy(() => import('../pages/ContactUs'))
const Settings = lazy(() => import('../pages/Settings'))
const Account = lazy(() => import('../pages/Account'))
const Library = lazy(() => import('../pages/Library'))
const Events = lazy(() => import('../pages/Events'))


const Router = props => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/toolkit" component={Toolkit} />
            <Route path="/documents" component={Documents} />
            <Route path="/library" component={Library} />
            <Route path="/events" component={Events} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/neet-helps" component={Settings} />
            <Route path="/account" component={Account} />
        </Switch>
    )
}

export default Router;