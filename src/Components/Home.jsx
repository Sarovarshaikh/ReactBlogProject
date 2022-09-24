import React from "react";
import "./Home.css";
import { useContext } from "react";
import { store } from "./Data";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data] = useContext(store);

  return (
    <div>
      <center>
        <h1 className="home-head">Welcome To My Blog Site</h1>
      </center>
      <p className="tech">Click For More Tech Blogs</p>
      <p className="food2">Click For More Food Blogs</p>
      <div className="top-div">
        <div className="box-div">
          <NavLink className="link" to={`/category/bollywood`}>
            <div className="inner-div one"></div>
          </NavLink>
          <NavLink className="link" to={`/category/hollywood`}>
            <div className="inner-div two"></div>
          </NavLink>
          <NavLink className="link" to={`/category/bollywood`}>
            <div className="inner-div three"></div>
          </NavLink>
          <NavLink className="link" to={`/category/fitness`}>
            <div className="inner-div four"></div>
          </NavLink>
        </div>
        <p className="click-banner">Click For More Fitness</p>
        <NavLink className="link" to={`/category/technology`}>
          <div className="side1"></div>
        </NavLink>
        <NavLink className="link" to={`/category/food`}>
          <div className="side2"></div>
        </NavLink>
      </div>

      <div className="middle-div">
        <h2 className="bold">The Latest</h2>
        <div className="line-highlight"></div>
        <div className="div-1">
          {data
            .filter((data) => data.category === "Bollywood")
            .map(
              (data, index) =>
                index < 3 && (
                  <NavLink className="link" to={`/bollywood/${data.id}`}>
                    <div id="latest-div" className="div-1-inner" key={index}>
                      <img src={data.image} alt="cover" className="img-1" />
                      <p className="div-1-title">{data.title}</p>
                      <p className="div-1-date">
                        {data.category} <br /> {data.date}
                      </p>
                      <hr id="hr-mid" className="hr1" />
                    </div>
                  </NavLink>
                )
            )}
        </div>
        <div className="hr1 mob-hr"></div>
      </div>
      <div id="mid-2s" className="mid-2">
        <h2>Latest Articles</h2>
        <div className="line-highlight line2"></div>
        {data
          .filter((data) => data.category === "Food")
          .map(
            (data, index) =>
              index < 4 && (
                <div key={index} id="mob-page" className="bolly-page mid-page">
                  <NavLink className="link" to={`/technology/${data.id}`}>
                    <img
                      src={data.image}
                      alt="cover"
                      id="home-bolly"
                      className="img-bolly"
                    />
                    <h5 id="home-title1">{data.title}</h5>
                    <p id='mob-desc5' className="blog-desc">{data.description}</p>
                    <p id="blog-date1" className="below-date">
                      <strong>{data.category}</strong> <br />
                      {data.date}
                    </p>
                  </NavLink>
                  <div id="bottom-hr1" className="line-div"></div>
                </div>
              )
          )}

        <aside className="home-aside">
          <h2 id="side-h2">Top Stories</h2>
          <div id="line3"></div>
          {data
            .filter((data) => data.category === "Fitness")
            .map(
              (data, index) =>
                index < 3 && (
                  <div key={index} className="aside-div">
                    {
                      <NavLink className="link" to={`/fitness/${data.id}`}>
                        <img src={data.image} alt="cover" className="img-div" />
                        <p>{data.title}</p>
                        <h6>
                          <strong>{data.category}</strong> <br /> {data.date}
                        </h6>
                      </NavLink>
                    }
                  </div>
                )
            )}
        </aside>
      </div>
     

     
    </div>
  );
};

export default Home;
