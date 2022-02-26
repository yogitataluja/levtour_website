import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../../../API';
import { blogHeader } from '../../../Assets';

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState({});

	const fetchBlog = useCallback(async () => {
		const res = await axios.get(`${API}/api/blog/${id}`);
		if (res.status === 200) setBlog(res.data);
	}, [id]);

	useEffect(() => {
		fetchBlog();
	}, [fetchBlog]);

	return (
		<>
			{/* Page Title */}
			<section
				className='page-title centred'
				style={{
					backgroundImage: `url(${blogHeader})`
				}}>
				<div className='auto-container'>
					<div className='content-box'>
						<h1>Blog</h1>
					</div>
				</div>
			</section>
			{/* End Page Title */}
			{/* sidebar-page-container */}
			<section className='sidebar-page-container'>
				<div className='auto-container'>
					<div className='row clearfix'>
						<div className='col-lg-8 col-md-12 col-sm-12 content-side'>
							<div className='blog-details-content'>
								<div className='news-block-one'>
									<div className='inner-box'>
										<div className='lower-content'>
											{/* <div className='category'>
												<a href='blog-details.html'>City Guide</a>
											</div> */}
											<h2>{blog.title}</h2>
										</div>
										<figure className='image-box'>
											<img src={blog.thumbnail} alt='' />
											<span className='post-date'>
												<i className='icon-Calendar' />
												{blog.createdAt
													? moment(blog.createdAt).format('Do MMM, YYYY')
													: 0}
											</span>
										</figure>
									</div>
								</div>
								<div className='text'>
									{HTMLReactParser(blog.content || 'Blog was not found.')}
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-12 col-sm-12 sidebar-side'>
							<div className='blog-sidebar default-sidebar ml-20'>
								<div className='sidebar-widget category-widget'>
									<div className='widget-title'>
										<h3>Categories</h3>
									</div>
									<div className='widget-content'>
										<ul className='category-list clearfix'>
											<li>
												<a href='/'>
													<i className='icon-Hover-Arrow' />
													Travel Direction
												</a>
											</li>
											<li>
												<a href='/'>
													<i className='icon-Hover-Arrow' />
													Documetation
												</a>
											</li>
											<li>
												<a href='/'>
													<i className='icon-Hover-Arrow' />
													Logo &amp; Assets
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* sidebar-page-container end */}
		</>
	);
};

export default BlogDetails;
