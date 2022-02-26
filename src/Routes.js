import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Containers from './components/Pages/Home/home/Containers';
import Tours from './components/Pages/Tours/Tours';
import Blog from './components/Pages/Blogs/Blog';
import Contact from './components/Pages/Contact/Contact';
import Signin from './components/Signin';
import AboutUs from './components/AboutUs';
import Bookings from './components/Pages/Tours/Bookings';
import TourDetails from './components/Pages/Tours/TourDetails';
import BlogDetails from './components/Pages/Blogs/BlogDetails';

const Routes = () => {
	return (
		<Router>
			<Header />
			<Switch>
				{/* <Route exact path="/"></Route> */}
				<Route exact path='/' component={Containers} />
				<Route exact path='/tours' component={Tours} />
				<Route exact path='/tour_details/:id' component={TourDetails} />
				<Route exact path='/blogs/:page' component={Blog} />
				<Route exact path='/blog/:id' component={BlogDetails} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/signin' component={Signin} />
				<Route exact path='/aboutus' component={AboutUs} />
				<Route exact path='/bookings' component={Bookings} />
				<Route path='/blogs' render={() => <Redirect to='/blogs/1' />} />
				<Route path='/blog' render={() => <Redirect to='/blogs/1' />} />
			</Switch>
			<Footer />
			<ScrollTop />
		</Router>
	);
};

export default Routes;
