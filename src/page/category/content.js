import React from 'react'

const Content=({childtitle,category,discription,imgeurl})=>{
   
     return (
        <div className="row no-gutters mt-2">
        <div className="col-md-5" style={{backgroundImage:`url(${imgeurl})`}}>
          
        </div>
        <div className="col-md-7">
            <div className="card-body bg-light">
                <span className="category">{category}</span>
                <h5 className="card-title">{childtitle}</h5>
                <p className='card-text'>{discription}</p>
                <div className="meta">
                    <span className='date'>22 jun 2020</span>
                    <span className="author float-start">author</span>
                </div>

            </div>
        </div>
    </div>
     )
}
export default Content