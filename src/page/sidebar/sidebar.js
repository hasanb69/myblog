import React from 'react'

const Sidebar=({childtitle})=>{
    return(
   
        <div className="widget sidebar p-1 bg-light">
           
              <ul class="list-group list-group-flush">
           
            <li className="list-group-item" >
                {childtitle}
             </li>

          

             </ul> 
         
        </div>


    )
   
}

export default Sidebar