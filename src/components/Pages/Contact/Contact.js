import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../../../API';
const Contact = () => {
	const [userdetails, setUserDetail] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		subject: '',
		message: ''
	});
	const { name, phoneNumber, email, subject, message } = userdetails;

	const getUserData = event => {
		const { name, value } = event.target;

		setUserDetail(preval => {
			return { ...preval, [name]: value };
		});
	};

	async function handleSubmit(e) {
		e.preventDefault();
		if (!(name || phoneNumber || email || subject || message)) {
			alert('Please fill all required field ');
			return;
		} else {
			let userdetails = await axios.post(`${API}/contact`, {
				name,
				phoneNumber,
				email,
				subject,
				message
			});
			if (userdetails) {
				window.location = '/contact';
			}
		}
	}

	return (
		<>
			{/* <!-- Page Title --> */}
			<section
				className='page-title centred'
				style={{
					backgroundImage: 'url(assets/images/background/page-title-5.jpg)'
				}}>
				<div className='auto-container'>
					<div className='content-box'>
						<h1>Contact</h1>
						<p>Discover your next great adventure</p>
					</div>
				</div>
			</section>
			{/* <!-- End Page Title --> */}

			{/* <!-- contact-info-section --> */}
			<section className='contact-info-section bg-color-1'>
				<div className='anim-icon'>
					<div
						className='icon anim-icon-1'
						style={{
							backgroundImage: 'url(assets/images/shape/shape-3.png)'
						}}></div>
					<div
						className='icon anim-icon-2'
						style={{
							backgroundImage: 'url(assets/images/shape/shape-3.png)'
						}}></div>
				</div>
				<div className='auto-container'>
					<div className='row clearfix'>
						<div className='col-lg-4 col-md-6 col-sm-12 info-column'>
							<div
								className='single-info-box wow fadeInUp animated animated'
								data-wow-delay='00ms'
								data-wow-duration='1500ms'>
								<div className='inner-box'>
									<div className='icon-box'>
										<i className='icon-Location'></i>
									</div>
									<h3>Address</h3>
									<p>
										Street Name, Kyiv, <br />
										Ukraine
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12 info-column'>
							<div
								className='single-info-box wow fadeInUp animated animated'
								data-wow-delay='300ms'
								data-wow-duration='1500ms'>
								<div className='inner-box'>
									<div className='icon-box'>
										<i className='icon-Phone'></i>
									</div>
									<h3>Phone</h3>
									<p>
										<a href='tel:911234567890'>+91 123 456 7890</a>
										<br />
										<a href='tel:911234567890'>+91 123 456 7890</a>
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12 info-column'>
							<div
								className='single-info-box wow fadeInUp animated animated'
								data-wow-delay='600ms'
								data-wow-duration='1500ms'>
								<div className='inner-box'>
									<div className='icon-box'>
										<i className='icon-Envelope'></i>
									</div>
									<h3>Email</h3>
									<p>
										<a href='mailto:info@example.com'>info@example.com</a>
										<br />
										<a href='mailto:info@example.com'>info@example.com</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- contact-info-section end --> */}

			{/* <!-- contact-section --> */}
			<section className='contact-section'>
				<div className='auto-container'>
					<div className='row clearfix'>
						<div className='col-lg-5 col-md-12 col-sm-12 content-column'>
							<div className='content_block_5'>
								<div className='content-box'>
									<div className='sec-title'>
										<p>Get in touch</p>
										<h2>Feel Free to Contact with us</h2>
									</div>
									<div className='text'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipiscing elit sed
											do eiu smod tempor incididunt ut labore dolore magna
											aliqua. Quis ultrices ipsum suspen ultrices gravida Risus
											commodo.
										</p>
									</div>
									<ul className='social-links clearfix'>
										<li>
											<a href='contact.html'>
												<i className='fab fa-facebook-f'></i>
											</a>
										</li>
										<li>
											<a href='contact.html'>
												<i className='fab fa-google-plus-g'></i>
											</a>
										</li>
										<li>
											<a href='contact.html'>
												<i className='fab fa-twitter'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-lg-7 col-md-12 col-sm-12 form-column'>
							<div className='form-inner'>
								<form
									method='post'
									action='/'
									id='contact-form'
									className='default-form'>
									<div className='row clearfix'>
										<div className='col-lg-6 col-md-6 col-sm-12 form-group'>
											<input
												type='text'
												name='name'
												value={name}
												onChange={getUserData}
												placeholder='Your Name'
												required=''
											/>
										</div>
										<div className='col-lg-6 col-md-6 col-sm-12 form-group'>
											<input
												type='email'
												name='email'
												value={email}
												onChange={getUserData}
												placeholder='Email Address'
												required=''
											/>
										</div>
										<div className='col-lg-6 col-md-12 col-sm-12 form-group'>
											<input
												type='text'
												name='phoneNumber'
												value={phoneNumber}
												onChange={getUserData}
												placeholder='Phone Number'
												pattern='[0-9\-]*'
											/>
										</div>
										<div className='col-lg-6 col-md-12 col-sm-12 form-group'>
											<input
												type='text'
												name='subject'
												value={subject}
												onChange={getUserData}
												required=''
												placeholder='Subject'
											/>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
											<textarea
												name='message'
												value={message}
												onChange={getUserData}
												placeholder='Write Message'></textarea>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group message-btn'>
											<button
												className='theme-btn'
												onClick={e => handleSubmit(e)}
												type='submit'
												name='submit-form'>
												Submit Now
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- contact-section end -->   */}
		</>
	);
};

export default Contact;
