import React from 'react'
import 'animate.css'
import l from '../../static/vibe.jpg'

const ServiceCard = ({ title, img, items = [] }) => {


    return (
        <div className='card-container' data-scroll style={{backgroundImage: `linear-gradient(black, black), url(${img})`}} >
            <div>
            <h2>{title}</h2>
            </div>
                
            {/* <ul>{items.map((item, idx) => <li key={`${idx}-card-list-item`}>{item}</li>)}</ul> */}
        </div>
    )
}

export default ServiceCard;