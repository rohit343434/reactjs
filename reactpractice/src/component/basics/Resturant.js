import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"



const Resturant = () => {
    const [menudata,setMenuData]= useState(Menu);

  return (
    <>

    <MenuCard menuData={menudata} />
      
    </>
  )
}

export default Resturant




// props use to do not repeat ek line m a loop
// use state hook vapray data store karva ek variable ma
