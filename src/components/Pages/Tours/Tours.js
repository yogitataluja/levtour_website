import React, { useEffect, useState } from "react";
import { Slider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import { API } from "../../../API";
import axios from "axios";
import { Link } from "react-router-dom";
const Tours = () => {
  const [showTravel, setShowTravel] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [cname, setClassName] = useState("list");
  const [select, setSelect] = useState("Travel Type");
  const [sort, setSort] = useState("Sort by");
  const [priceval, setPriceVal] = useState([40, 50]);
  // for all product api
  const [tours, setTours] = useState([]);
  // for Category api
  const [category, setCategory] = useState([]);
  // pagination
  const [totalRes, setTotalRes] = useState(0);
  const [paginationVal] = useState(4);
  const [currentpage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);

  useEffect(() => {
    async function getTours() {
      const Tourslist = await axios.get(`${API}/api/product/all`);

      setTours(Tourslist.data);
      setTotalRes(Tourslist.data.length);
    }

    async function getCategory() {
      const categories = await axios.get(`${API}/api/category`);
      setCategory(categories.data);
    }
    getCategory();
    getTours();
  }, []);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "400px" });
    setActive(currentpage);
  }, [currentpage]);

  // generate array as per the total length and post per page
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRes / paginationVal); i++) {
    pageNumbers.push(i);
  }

  // change page event clicked page number become current page
  const paginate = (curntPage) => {
    // setActive(curntPage);
    setCurrentPage(curntPage);
  };

  const goTonextPage = () => {
    if (currentpage !== pageNumbers[pageNumbers.length - 1]) {
      setCurrentPage(currentpage + 1);
    } else {
      window.scrollTo({ behavior: "smooth", top: "100px" });
    }
  };

  // if page number change due to click on respective page by paginate function  we can change the paginated data from 0-6 to 6-12 like that..
  const indexOfLastPost = currentpage * paginationVal;
  const indexOfFirstPost = indexOfLastPost - paginationVal;
  const PaginatedData = tours.slice(indexOfFirstPost, indexOfLastPost);
  // only paginate no. of post map

  // range slider
  const updateVal = (event, val) => {
    setPriceVal(val);
  };
  // update color of range slider
  const muiTheme = createTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#F07A59",
        },
        track: {
          color: "#F07A59",
        },
        rail: {
          color: "grey",
        },
      },
    },
  });

  return (
    <>
      {/* <!-- Page Title --> */}

      <section
        class="page-title style-two centred"
        style={{
          backgroundImage: "url(assets/images/background/page-title-2.jpg)",
        }}
      >
        <div class="auto-container">
          <div class="content-box">
            <h1>Tours List</h1>
            <p>Discover your next great adventure</p>
          </div>
          <div class="form-inner">
            <form action="#" method="post" class="booking-form clearfix">
              <div class="form-group">
                <input
                  type="text"
                  name="service"
                  placeholder="Where to?"
                  required=""
                />
              </div>
              <div class="form-group input-date">
                <i class="far fa-angle-down"></i>
                <input
                  type="text"
                  name="date"
                  placeholder="When?"
                  id="datepicker"
                />
              </div>
              <div class="form-group">
                <div class="select-box">
                  <div
                    className={`nice-select wide ${!showTravel ? "" : "open"}`}
                    tabindex="0"
                    onClick={() => setShowTravel(!showTravel)}
                  >
                    <span class="current"> {select} </span>

                    <ul class="list">
                      <option
                        class="option focus selected"
                        value="Travel Type"
                        data-display="Travel Type"
                        onClick={(e) => setSelect(e.target.value)}
                      >
                        Travel Type
                      </option>

                      {category.map((cat) => {
                        return (
                          <option
                            class="option"
                            value={cat.category}
                            onClick={(e) => setSelect(e.target.value)}
                          >
                            {cat.category}
                          </option>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="message-btn">
                <button type="submit" class="theme-btn">
                  <i class="far fa-search"></i>Find Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- End Page Title --> */}

      {/* <!-- tours-page-section --> */}
      <section class="tours-page-section">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-8 col-md-12 col-sm-12 content-side">
              <div class="item-shorting clearfix">
                <div class="left-column pull-left">
                  <h3>
                    Showing {paginationVal*(currentpage-1)+1}-{totalRes<(paginationVal*currentpage)?<>{totalRes}</>:<>{paginationVal*currentpage}</>} of {totalRes} Results
                  </h3>
                </div>
                <div class="right-column pull-right clearfix">
                  <div class="short-box clearfix">
                    <div class="select-box">
                      <div
                        className={`nice-select wide ${
                          !showSort ? "" : "open"
                        }`}
                        tabindex="0"
                        onClick={() => setShowSort(!showSort)}
                      >
                        <span class="current">{sort}</span>
                        <ul class="list">
                          <option
                            class="option selected focus"
                            value="Sort by"
                            data-display="Sort by"
                            onClick={(e) => setSort(e.target.value)}
                          >
                            Sort by
                          </option>
                          <option
                            class="option"
                            value="Sort 01"
                            onClick={(e) => setSort(e.target.value)}
                          >
                            Sort 01
                          </option>
                          <option
                            class="option"
                            value="Sort 02"
                            onClick={(e) => setSort(e.target.value)}
                          >
                            Sort 02
                          </option>
                          <option
                            class="option"
                            value="Sort 03"
                            onClick={(e) => setSort(e.target.value)}
                          >
                            Sort 03
                          </option>
                          <option
                            class="option"
                            value="Sort 04"
                            onClick={(e) => setSort(e.target.value)}
                          >
                            Sort 04
                          </option>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="menu-box">
                    <button
                      onClick={() => setClassName("list")}
                      class={`list-view ${cname === "list" ? "on" : ""} `}
                    >
                      <i class="icon-List"></i>
                    </button>
                    <button
                      onClick={() => setClassName("grid")}
                      class={`grid-view ${cname === "grid" ? "on" : ""}`}
                    >
                      <i class="icon-Grid"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class={`wrapper ${cname}`}>
                <div class="tour-grid-content">
                  <div class="row clearfix">
                    {PaginatedData.length > 0 ? (
                      PaginatedData.map((tour, index) => {
                        return (
                          <div
                            key={index}
                            id={tour._id}
                            class="col-lg-6 col-md-6 col-sm-12 tour-block"
                          >
                            <div class="tour-block-one">
                              <div class="inner-box">
                                <figure class="image-box">
                                  <img
                                    src={tour.images}
                                    style={{ width: "370px", height: "270px" }}
                                    alt="tour"
                                  />
                                  <a href="tour-details.html">
                                    <i class="fas fa-link"></i>
                                  </a>
                                </figure>
                                <div class="lower-content">
                                  <h3>
                                    <a href="tour-details.html">{tour.title}</a>
                                  </h3>
                                  <h4>
                                    ${tour.price}.00<span> / Per person</span>
                                  </h4>
                                  <ul class="info clearfix">
                                    <li>
                                      <i class="far fa-clock"></i>5 Days
                                    </li>
                                    <li>
                                      <i class="far fa-map"></i>1234, Ukraine
                                    </li>
                                  </ul>
                                  <p>{tour.description}</p>
                                  <div class="btn-box">
                                    <a href={`/tour_details/${tour._id}`}>See Details</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <h1 style={{ marginTop: "5rem", textAlign: "center" }}>
                        No Tour Found
                      </h1>
                    )}
                  </div>
                </div>

                <div class="tour-list-content list-item">
                  {PaginatedData.length > 0 ? (
                    PaginatedData.map((tour, index) => {
                      return (
                        <div class="tour-block-two">
                          <div class="inner-box">
                            <figure class="image-box">
                              <img
                                src={tour.images}
                                style={{ width: "190px", height: "227px" }}
                                alt=""
                              />
                              <Link to={`/tour_details/${tour._id}`}>
                                <i class="fas fa-link"></i>
                              </Link>
                            </figure>
                            <div class="content-box">
                              <h3>
                                <a href="tour-details.html">{tour.title}</a>
                              </h3>
                              <h4>
                                ${tour.price}.00<span> / Per person</span>
                              </h4>
                              <p>{tour.description}</p>
                              <div class="btn-box">
                                <Link to={`/tour_details/${tour._id}`}>
                                  See Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1 style={{ marginTop: "5rem", textAlign: "center" }}>
                      No Tour Found
                    </h1>
                  )}
                </div>
              </div>
              {/* pagination */}
              <div class="pagination-wrapper">
                <ul class="pagination clearfix">
                  {pageNumbers.length > 0
                    ? pageNumbers.map((page, index) => {
                        return (
                          <li>
                            <a
                              href="#"
                              className={` ${active === page ? "current" : ""}`}
                              key={index}
                              value={page}
                              id={page}
                              onClick={() => paginate(page)}
                            >
                              {page}
                            </a>
                          </li>
                        );
                      })
                    : null}
                  <li>
                    <a onClick={goTonextPage}>
                      <i class="icon-Right-Arrow"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div class="default-sidebar tour-sidebar ml-20">
                <div class="sidebar-widget sidebar-search">
                  <div class="widget-title">
                    <h3>Search</h3>
                  </div>
                  <form action="#" method="post" class="search-form">
                    <div class="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Search"
                        required=""
                      />
                      <button type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* category */}
                <div class="sidebar-widget category-widget">
                  <div class="widget-title">
                    <h3>Category</h3>
                  </div>
                  <div class="widget-content">
                    <ul class="category-list clearfix">
                      {category.length > 0
                        ? category.map((cat) => {
                            return (
                              <li class="custom-check-box">
                                <div class="custom-controls-stacked">
                                  <label class="custom-control material-checkbox">
                                    <input
                                      type="checkbox"
                                      class="material-control-input"
                                    />
                                    <span class="material-control-indicator"></span>
                                    <span class="description">
                                      {cat.category}
                                    </span>
                                  </label>
                                </div>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                </div>
                <div class="sidebar-widget price-filter">
                  <div class="widget-title">
                    <h3>Price Range</h3>
                  </div>
                  <div class="range-slider clearfix">
                    <div class="value-box clearfix">
                      <div class="min-value pull-left">
                        <p>${priceval[0]}</p>
                      </div>
                      <div class="max-value pull-right">
                        <p>${priceval[1]}</p>
                      </div>
                    </div>
                    <div class="price-range-slider">
                      <ThemeProvider theme={muiTheme}>
                        <Slider
                          size="large"
                          max={100}
                          value={priceval}
                          onChange={updateVal}
                        />
                      </ThemeProvider>
                    </div>
                  </div>
                </div>
                <div class="sidebar-widget duration-widget">
                  <div class="widget-title">
                    <h3>Durations</h3>
                  </div>
                  <div class="widget-content">
                    <ul class="category-list clearfix">
                      <li class="custom-check-box">
                        <div class="custom-controls-stacked">
                          <label class="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              class="material-control-input"
                            />
                            <span class="material-control-indicator"></span>
                            <span class="description">0 - 24 hours</span>
                          </label>
                        </div>
                      </li>
                      <li class="custom-check-box">
                        <div class="custom-controls-stacked">
                          <label class="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              class="material-control-input"
                            />
                            <span class="material-control-indicator"></span>
                            <span class="description">1 - 2 days</span>
                          </label>
                        </div>
                      </li>
                      <li class="custom-check-box">
                        <div class="custom-controls-stacked">
                          <label class="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              class="material-control-input"
                            />
                            <span class="material-control-indicator"></span>
                            <span class="description">2 - 3 days</span>
                          </label>
                        </div>
                      </li>
                      <li class="custom-check-box">
                        <div class="custom-controls-stacked">
                          <label class="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              class="material-control-input"
                            />
                            <span class="material-control-indicator"></span>
                            <span class="description">3 - 4 days</span>
                          </label>
                        </div>
                      </li>
                      <li class="custom-check-box">
                        <div class="custom-controls-stacked">
                          <label class="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              class="material-control-input"
                            />
                            <span class="material-control-indicator"></span>
                            <span class="description">4 - 5 days</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- tours-page-section end --> */}
    </>
  );
};

export default Tours;
