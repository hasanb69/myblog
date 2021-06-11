import React from 'react'
import HomeSlider from './homeheaderslider'
import {Link,withRouter} from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import './content.style.css'
const ContentHomePage=({items})=>{

    return(
       

           items.map(item=>
            <div key={item.id} className="maincontent  mt-5 p-2 bg-light">

                <h3><Link to={`blog/${item.category}/${item.linkUrl}`}>{item.childtitle} </Link></h3>
                <div className="metadata mt-1">
               <span className='category'><Link to={`${item.category}`}> {item.title}</Link></span>
                    <span className="author float-start">{item.author}</span>
                </div>
                <div className="image">
                   <img src={item.imgeurl} className="w-100 h-100" />
                </div>
               
                 <div className="abstarct mt-2">{item.abstract}</div>
             </div>

            )
   
    )
}
export default ContentHomePage