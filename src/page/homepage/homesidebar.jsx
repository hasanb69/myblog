import React from 'react'

const HomeSidebar=({items})=>{
   return(
    <div className="widget sidebar p-1 bg-light">
           
    <ul class="list-group list-group-flush">
     {items.map(item=>
       <li className="list-group-item" key={item.id}>
         {item.childtitle}
       </li>

    )}
    </ul> 

  </div>
   )
}
export default HomeSidebar