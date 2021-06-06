import React from 'react'

const HomeSlider=({items})=>{

   
  
   const find=items.filter((d=>d.type==='slider'))


 // const find=items.map(item=>item)
  //const sec=Array.prototype.concat(...items)
    //const sliders=Array.prototype.concat(...find)
    //console.log(items)
    //const findslider=items.find(data=>data.type ==='slider')
    console.log(find)
    return(

        find.map(data=>
            <div className="px-2 col-sm-6 col-lg-4 col-xxl-3" key={data.id}>
         
            <div className="card card-blog"><img className="card-img img-fluid" src={`${data.imgeurl}`} alt="" />
              <div className="card-img-overlay overlay-gradient d-flex flex-column justify-content-between">
                <h5 className="card-title text-white">Revolutionise Your Workspace With Us At Gridworks</h5>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div><span className="uil fs-3 text-300 align-middle uil-lightbulb-alt"></span><span className="text-white fs--1 mb-0 d-inline-block">Reffering Workspace</span></div><a className="badge badge-pill stretched-link ml-2 badge-success" data-toggle="modal" href="#modal-card">Entrepreneurship</a>
                </div>
              </div>
            </div>
          </div>
            )
    
    )

}

export default HomeSlider