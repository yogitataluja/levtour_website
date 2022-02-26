import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { API } from '../../../API';
import { blogHeader } from '../../../Assets';
const Blog = () => {
	const [state, setState] = useState({
		blogs: [],
		limit: 10,
		totalBlogs: 0,
		pages: 1
	});

	const { push } = useHistory();

	const { page } = useParams();

	const { blogs, limit, totalBlogs, pages } = state;

	const fetchBlogs = useCallback(async () => {
		const res = await axios.get(`${API}/api/blog?page=${page}&limit=${limit}`);
		if (res.status === 200) changeState({ ...res.data });
	}, [limit, page]);

	useEffect(() => {
		fetchBlogs();
	}, [fetchBlogs]);

	useEffect(() => {
		changeState({ pages: totalBlogs / limit });
	}, [limit, totalBlogs]);

	const changeState = newState =>
		setState(prevState => ({ ...prevState, ...newState }));

	window.scrollTo({ behavior: 'smooth', top: '0px' });

	const pageNumbers = useMemo(() => {
		const totalPages = pages > 1 ? pages : totalBlogs ? 1 : 0;
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}, [pages, totalBlogs]);

	return (
		<>
			{/* <!-- Page Title --> */}
			<section
				className='page-title centred'
				style={{
					background: `url(${blogHeader})`
				}}>
				<div className='auto-container'>
					<div className='content-box'>
						<h1>Blog</h1>
					</div>
				</div>
			</section>
			{/* <!-- End Page Title --> */}

			{/* <!-- sidebar-page-container --> */}
			<section className='sidebar-page-container'>
				<div className='auto-container'>
					<div className='row clearfix'>
						<div className='col-lg-8 col-md-12 col-sm-12 content-side'>
							<div className='blog-grid-content'>
								<div className='row clearfix'>
									
									{blogs.map(item => (
										<div
											className='col-lg-6 col-md-6 col-sm-12 news-block'
											key={item._id}>
											<div
												className='news-block-one wow fadeInUp animated animated'
												data-wow-delay='00ms'
												data-wow-duration='1500ms'>
												<div className='inner-box'>
													<figure className='image-box'>
														<Link to={`/blog/${item._id}`}>
															<img src={item.thumbnail} alt='' />
														</Link>
													</figure>
													<div className='lower-content'>
														{/* <div className='category'>
															<Link to={`/blogs/${item._id}`}>{item.tag}</Link>
														</div> */}
														<h3>
															<Link to={`/blog/${item._id}`}>{item.title}</Link>
														</h3>
														<p>
															{HTMLReactParser(item.content.split('<br>')[0])}
														</p>
														<div className='btn-box'>
															<Link
																to={`/blog/${item._id}`}
																className='theme-btn-two'>
																See Details
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
								<div className='pagination-wrapper'>
									<ul className='pagination clearfix'>
									
										{pageNumbers.length ? (
											pageNumbers.map(pageNo => {
												return (
													<li>
														<Link
															to={`/blogs/${pageNo}`}
															className={page === pageNo ? 'current' : ''}
															key={`page_number_${pageNo}`}
															value={pageNo}
															id={pageNo}>
															{pageNo}
														</Link>
													</li>
												);
											})
										) : (
											<p className='center'>No blogs available yet.</p>
										)}
										{/* next button for pagination */}
										{pages > 1 ? (
											<li>
												<div onClick={() => push(`/blogs/${page + 1}`)}>
													<i className='icon-Right-Arrow'></i>
												</div>
											</li>
										) : (
											''
										)}
									</ul>
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
												<Link to='/'>
													<i className='icon-Hover-Arrow'></i>Travel Direction
												</Link>
											</li>
											<li>
												<Link to='/'>
													<i className='icon-Hover-Arrow'></i>Documetation
												</Link>
											</li>
											<li>
												<Link to='/'>
													<i className='icon-Hover-Arrow'></i>Customs
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- sidebar-page-container end -->   */}
		</>
	);
};

export default Blog;
