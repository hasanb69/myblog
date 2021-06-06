import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import SinglePost from '../../component/singlepoost/singlepost.component'
const Blog=({match})=>{
    return(
        <div className="row justify-content-center mt-5">
         
           <Route path={`${match.path}/:category/:linkUrl`}  component={SinglePost}/>
        </div>
    )
}

export default Blog