import React from 'react'

const Sidebar=({childtitle})=>{
    return(
   
        <div className="widget sidebar p-1 bg-light">
           
              <ul class="list-group list-group-flush">
                 <li class="list-group-item"><a href="#">{childtitle}</a> </li>
               
         
             </ul> 
         
        </div>


    )
   
}

export default Sidebar