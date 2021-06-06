import React from 'react'
import {connect} from 'react-redux'
import {selectCatForOverview,findItems} from '../../redux/category/category selector'
import {createStructuredSelector} from 'reselect'

const SinglePost=({match,data,findCategory})=>{
  // const convert= data? Object.keys(data).map(key=>data[key]):[]
    console.log(data.discription)
   return(
       <div className="col-lg-10 col-md-11">
           <div className="header col-md-8 text-center mx-auto">
           <img className="w-100" src={`${data.imgeurl}`} alt={`${data.childtitle}`} />
           <div className="footer-image">
                <span className="category float-end">{data.category}</span>
                <span className="author float-start">{data.author}</span>
           </div>
           
                 <h1 className="pt-5"> {data.childtitle} </h1>
           </div>
           <div className="bodyarticle mt-5">
              {data.discription}

           </div>
           
                 
                 <div>
                
                 </div>
               
       </div>
   )
}



const mapStateToProps=(state,{match})=>({
    data:state.cat.data[match.params.category].items.find(subcat=>subcat.linkUrl === match.params.linkUrl)
    
  })
  
/*
  const mapStateToProps=(state,ownProps)=>({
    findCategory:findItems(ownProps.match.params.category)(state),
  // data:convertFindItems
  
    //نام دسته را به سلکتور ارجاع میدهد مثلا:hats
})
  /*const mapStateToProps=createStructuredSelector({
    data:selectCatForOverview
  })*/
export default connect(mapStateToProps)(SinglePost)
