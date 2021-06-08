import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './homeslider.style.css'
const HomeSlider=({items})=>{

   
  
   const sliders=items.filter((d=>d.type.includes('slider')))
  // const slidersbig=items.filter((d=>d.type==='sliderbig'))

 // const find=items.map(item=>item)
  //const sec=Array.prototype.concat(...items)
    //const sliders=Array.prototype.concat(...find)
    //console.log(items)
    //const findslider=items.find(data=>data.type ==='slider')
    //console.log(find)
    return(
        
        sliders.map(data=>
            <div  className={`${data.type} px-2 col-sm-6 col-lg-4 col-xxl-3 mt-5`} key={data.id}>
         
            <div className="card card-blog"><img className="card-img img-fluid" src={`${data.imgeurl}`} alt="" />
              <div className="card-img-overlay overlay-gradient d-flex flex-column justify-content-between">
                <h5 className="card-title text-white"><Link to={`blog/${data.category}/${data.linkUrl}`}>{data.childtitle} </Link></h5>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                 
                  <Link to={`blog/${data.category}/${data.linkUrl}`} className="badge badge-pill stretched-link ml-2 badge-success" >{data.category}</Link>
                </div>
              </div>
            </div>
          </div>
            )
          
    )

}

export default withRouter( HomeSlider)