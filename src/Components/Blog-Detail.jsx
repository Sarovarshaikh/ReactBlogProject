import React from "react";
import './Compo.css'
import { store } from "./Data";
import { useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";

const BlogDetail = () => {

    const [data] = useContext(store);
    const {id} = useParams();
    
    
    
    const blog = data.find((blog) => blog.id === parseInt(id));
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div>
      <center className="full-center">
        <h2 id="detail-title">{blog.title}</h2>
        <img src={blog.image} alt="cover" className="full-img" />
        <h6 className="full-date"><strong>{blog.category}</strong> <br />{blog.date}</h6>
        <div className="full-body">{blog.body}</div>
        <div className="full-line"></div>
      </center>
      <h2 className="bottom-h2">Read More From {blog.category}</h2>
      <div className="highlight"></div>
        {
            data.filter((data)=> data.category === blog.category).map((data,index)=> index < 5 &&(
                <div key={index} className="bottom-div">
                    {
                        <NavLink className='link' to={`/${blog.category}/${data.id}`}>
                            <img src={data.image} alt="cover" className="bottom-img" />
                            <h5 className="bottom-title">{data.title}</h5>
                            <p className="bottom-desc">{data.description}</p>
                        </NavLink>
                    }
                    <div className="bottom-hrLine"></div>
                </div>
            ))
        }
    </div>
  )
}


export default BlogDetail
