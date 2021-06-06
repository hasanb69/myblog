import React from 'react'
import {connect} from 'react-redux'
import {Link,Route,withRouter,Switch} from 'react-router-dom'
import Sidebar from '../../sidebar/sidebar'
import Content from '../content'
import SinglePost from '../../../component/singlepoost/singlepost.component'
const Psychology=({match,data})=>{
    console.log(match.path)
   return(
    <div className="row">
    <div className="col-md-8">
    <h1>sport</h1>
    {data[match.path.slice(1)].items.map(({id,...otherprops})=>
        
        <Content Key={id} {...otherprops} mat={match.path}/>
        
        )}
  
    </div>
    <div className="col-md-4 mt-5">
      <h4>اخرین مطالب</h4>
    {data[match.path.slice(1)].items.map(({id,...otherprops})=>
        
        <Sidebar Key={id} {...otherprops} />
        
        )}

   </div>
  
   <Route path={`/:blog/:category/:linkUrl`}  component={SinglePost}/>


</div>
   )
    
}
const mapStateToProps=state=>({
      data:state.cat.data
})


export default withRouter(connect (mapStateToProps)(Psychology))