import React from 'react'
const mystyle={
   
}

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{

        return( <div className='card-container' key={curElem.id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle"> {curElem.id}</span>
               
                <span className="card-author subtle" style={mystyle } >{curElem.name}</span>
                <h2 className='card-title'>Maggi</h2>
                <span className="card-description subtle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa iste repudiandae, voluptatem autem veniam maxime recusandae provident ratione error voluptatibus deserunt nam culpa soluta, eveniet molestiae voluptates labore neque?
                </span>
                <div className="card-read">Read</div>

            </div>
            {/* <img src="{images}" alt="images" className='card-media' /> */}
            <span className="card-tag subtle">Order Now</span>
        </div>

    </div>

        )
    })}
    </section>
   
    </>
    )
}

export default MenuCard
