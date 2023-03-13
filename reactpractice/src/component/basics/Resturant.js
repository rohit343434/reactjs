import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'



const uniqueList=[...new Set(Menu.map((curElem)=>{
  return curElem.category;
})
),
"All",
]


const Resturant = () => {
    const [menudata,setMenuData]= useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);

    const filterIteam=(category)=>{

      if(category==="All"){
        setMenuData(Menu)
        return;
      }
      const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedlist);
    };

  return (
    <>
    <Navbar filterIteam={filterIteam} menuList={menuList} />
    

    <MenuCard menuData={menudata} />
    <p>rohit makwana</p>
      
    </>
  )
}

export default Resturant




// props use to do not repeat ek line m a loop
// use state hook vapray data store karva ek variable ma
