import React from 'react'



const Navbar = ({filterIteam,menuList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        {
          menuList.map((curElem)=>{
            return(
              <button className='btn-group__item' onClick={()=>filterIteam(curElem)}>{curElem}</button>

            )
          })
        }
        
       
        {/* <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button> */}
        {/* category lakheli 6 card so we just need to set that in navbar */}
      </div>
    </nav>
      
    </>
  )
}

export default Navbar
