import React from 'react'
import {connect} from 'react-redux'
import {selectCatForOverview} from '../../redux/category/category selector'
import {createStructuredSelector} from 'reselect'
import HomeSlider from'./homeheaderslider'
const HomePage=({data})=>{

    return(
    <div className="content">
          <div className="row bg-red">
          {data.map((item)=>
                <HomeSlider key={item.id}  items={item.items} />
              ) }
      
          </div>
    </div>
    )

}
const mapStateToProps=createStructuredSelector({
    data:selectCatForOverview
  })
export default connect (mapStateToProps)(HomePage)