import React from 'react'
import {connect} from 'react-redux'

import Sidebar from '../../sidebar/sidebar'
import Content from '../content'
const Sport=({match,data})=>{
  return(
    <div className="row">
        <div className="col-md-8">
        <h1>sport</h1>
        {data[match.path.slice(1)].items.map(({id,...otherprops})=>
            
            <Content Key={id} {...otherprops}/>
            
            )}
      
        </div>
        <div className="col-md-4 mt-5">

           <Sidebar />
       </div>
    </div>
)
}
const mapStateToProps=state=>({
      data:state.cat.data
})


export default connect(mapStateToProps)(Sport)