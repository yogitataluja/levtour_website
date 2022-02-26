import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { API } from '../API';
import axios from 'axios';
const Header = () => {
	const [config, setConfig] = useState('');
	const [mobileview, setMobileView] = useState(false);

	useEffect(() => {
		async function getConfiguration() {
			const configurationLogo = await axios.get(`${API}/api/config/logo`);
			console.log(configurationLogo.data);
			setConfig(configurationLogo.data);
		}
		getConfiguration();
		document.body.classList.toggle('mobile-menu-visible', mobileview);
	}, [mobileview]);

	return (
		<>
			{/* <!-- main header --> */}
			<header className='main-header style-three  '>
				{/* <!-- header-lower --> */}
				<div className='header-lower'>
					<div className='outer-box clearfix container'>
						<div className='menu-area pull-left clearfix'>
							<div className='logo-box'>
								<figure className='logo'>
									<Link to='/'>
										<img src='assets/images/logo-3.png' alt='' />
									</Link>
								</figure>
							</div>

							{/* <!--Mobile Navigation Toggler--> */}
							{/* onclick function */}
							<div
								className='mobile-nav-toggler'
								onClick={() => setMobileView(!mobileview)}>
								<i className='icon-bar'></i>
								<i className='icon-bar'></i>
								<i className='icon-bar'></i>
							</div>

							<nav className='main-menu navbar-expand-md navbar-light'>
								<div
									className='collapse navbar-collapse show clearfix'
									id='navbarSupportedContent'>
									<ul className='navigation clearfix'>
										<li>
											<Link to='/'>Home</Link>
										</li>
										<li>
											<Link to='/tours'>Tours</Link>
										</li>
										<li>
											<Link to='#'>Film Services</Link>
										</li>
										<li>
											<Link to='#'>Castles</Link>
										</li>
										<li className='dropdown'>
											<Link to='#'>Boats and Yachts</Link>
											<div className='megamenu'>
												<div className='row clearfix'>
													<div className='col-xl-6 column'>
														<ul>
															<li>
																<h4>Small Boats</h4>
															</li>
															<li>
																<Link to='#'>Victoria</Link>
															</li>
															<li>
																<Link to='#'>Antie</Link>
															</li>
															<li>
																<Link to='#'>Odessie</Link>
															</li>
														</ul>
													</div>
													<div className='col-xl-6 column'>
														<ul>
															<li>
																<h4>Large Boats</h4>
															</li>
															<li>
																<Link to='#'>Silverwave</Link>
															</li>
															<li>
																<Link to='#'>Alpi</Link>
															</li>
															<li>
																<Link to='#'>Omar</Link>
															</li>
															<li>
																<Link to='#'>Silver Breeze</Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<Link to='/blogs'>Blog</Link>
										</li>
										<li>
											<Link to='/contact'>Contact</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
						<ul className='menu-right-content pull-right clearfix'>
							<li className='user-link'>
								<Link to='/signin'>
									<i className='icon-Profile'></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* <!--sticky Header--> */}
				<div className='sticky-header'>
					<div className='auto-container'>
						<div className='outer-box'>
							<div className='logo-box'>
								<figure className='logo'>
									<Link to='/'>
										<img src='assets/images/logo.png' alt='' />
									</Link>
								</figure>
							</div>
							<div className='menu-area'>
								<nav className='main-menu clearfix'>
									{/* <!--Keep This Empty / Menu will come through Javascript--> */}
									<Navigation />
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- main-header end --> */}

			{/* <!-- Mobile Menu  --> */}
			<div className='mobile-menu'>
				<div className='menu-backdrop'></div>
				<div
					className='close-btn'
					onClick={() => document.body.classList.remove('mobile-menu-visible')}>
					<i className='fas fa-times'></i>
				</div>

				<nav className='menu-box'>
					<div className='nav-logo'>
						<Link to='/'>
							<img src='assets/images/logo-2.png' alt='' title='' />
						</Link>
					</div>
					<div className='menu-outer'>
						{/* <!--Keep This Empty / Menu will come through Javascript--> */}
						<Navigation />
					</div>
					<div className='contact-info'>
						<h4>Contact Info</h4>
						<ul>
							<li>Flat 123, Street Name, City, Ukraine</li>
							<li>
								<Link to='tel: +380 50 473 8000'> +380 50 473 8000</Link>
							</li>
							<li>
								<Link to='mailto:info@lev.tours'>info@lev.tours</Link>
							</li>
						</ul>
					</div>
					<div className='social-links'>
						<ul className='clearfix'>
							<li>
								<Link to='index.html'>
									<span className='fab fa-twitter'></span>
								</Link>
							</li>
							<li>
								<Link to='index.html'>
									<span className='fab fa-facebook-square'></span>
								</Link>
							</li>
							<li>
								<Link to='index.html'>
									<span className='fab fa-pinterest-p'></span>
								</Link>
							</li>
							<li>
								<Link to='index.html'>
									<span className='fab fa-instagram'></span>
								</Link>
							</li>
							<li>
								<Link to='index.html'>
									<span className='fab fa-youtube'></span>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			{/* <!-- End Mobile Menu --> */}
		</>
	);
};

export default Header;
