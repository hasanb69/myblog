import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'

const Content=({childtitle,category,discription,imgeurl,author,linkUrl,mat})=>{
    console.log(mat)
     return (
        <div className="row no-gutters mt-2">
        <div className="col-md-5" style={{backgroundImage:`url(${imgeurl})`}}>
          
        </div>
        <div className="col-md-7">
            <div className="card-body bg-light">
                <span className="category">{category}</span>
                <h5 className="card-title"> <Link to={`${mat}/${linkUrl}`}>{childtitle} </Link></h5>
                <p className='card-text'>{discription}</p>
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