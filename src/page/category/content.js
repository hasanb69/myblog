import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import './content.style.css'
const Content=({id,childtitle,category,discription,imgeurl,author,linkUrl,mat,abstract})=>{
  
     return (
        <div className="row no-gutters mt-2">
        <div className="col-md-5 bg-cover" style={{backgroundImage:`url(${imgeurl})`}}>
          
        </div>
        <div className="col-md-7">
            <div className="card-body bg-light" key={id}>
               
                <h5 className="card-title"> <Link to={`blog/${category}/${linkUrl}`}>{childtitle} </Link></h5>
                <p className='card-text'>{abstract}</p>
                <div className="meta">
                    <span className='date'>22 jun 2020</span>
                    <span className="author float-start">{author}</span>
                </div>

            </div>
        </div>
     
    </div>
     )

   
}
export default withRouter(Content)