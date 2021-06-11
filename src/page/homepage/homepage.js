import React from 'react'
import {connect} from 'react-redux'
import {selectCatForOverview} from '../../redux/category/category selector'
import {createStructuredSelector} from 'reselect'
import HomeSlider from'./homeheaderslider'
import ContentHomePage from './content'
import HomeSidebar from './homesidebar'
const HomePage=({data})=>{

    return(
    <div className="content">
          <div className="row justify-content-center mt-5">
          {data.map((item)=>
                <HomeSlider key={item.id}  items={item.items} />
                 
              ) }

         <div className="col-md-6">
          {data.map((item)=>
              
                <ContentHomePage key={item.id}  items={item.items} />
                
              ) }
            </div>


            <div className="col-md-4">
          {data.map((item)=>
              
                <HomeSidebar key={item.id}  items={item.items} />
                
              ) }
            </div>
          </div>
    </div>
    )

}
const mapStateToProps=createStructuredSelector({
    data:selectCatForOverview
  })
export default connect (mapStateToProps)(HomePage)