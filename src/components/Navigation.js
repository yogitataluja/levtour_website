import React from 'react';
const Navigation = () => {
	return (
		<>
			<div
				className='collapse navbar-collapse show clearfix'
				id='navbarSupportedContent'>
				<ul className='navigation clearfix'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/tours'>Tours</a>
					</li>
					<li>
						<a href='/'>Film Services</a>
					</li>
					<li>
						<a href='/'>Castles</a>
					</li>
					<li className='dropdown'>
						<a href='/'>Boats and Yachts</a>
						<div className='megamenu'>
							<div className='row clearfix'>
								<div className='col-xl-6 column'>
									<ul>
										<li>
											<h4>Small Boats</h4>
										</li>
										<li>
											<a href='/'>Victoria</a>
										</li>
										<li>
											<a href='/'>Antie</a>
										</li>
										<li>
											<a href='/'>Odessie</a>
										</li>
									</ul>
								</div>
								<div className='col-xl-6 column'>
									<ul>
										<li>
											<h4>Large Boats</h4>
										</li>
										<li>
											<a href='/'>Silverwave</a>
										</li>
										<li>
											<a href='/'>Alpi</a>
										</li>
										<li>
											<a href='/'>Omar</a>
										</li>
										<li>
											<a href='/'>Silver Breeze</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					<li>
						<a href='/blogs'>Blog</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
