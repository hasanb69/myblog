import React from 'react'
import {connect} from 'react-redux'

import Sidebar from '../../sidebar/sidebar'
import Content from '../content'

const Psychology=({match,data})=>{
    console.log(match.path)
   return(
    <div className="row">
    <div className="col-md-8">
    <h1>مطالب روانشناسی</h1>
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
  
  


</div>
   )
    
}
const mapStateToProps=state=>({
      data:state.cat.data
})


export default connect (mapStateToProps)(Psychology)