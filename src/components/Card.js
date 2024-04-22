import React, { useState } from 'react';
function Card({ id, image, info, price, name, removeTour}) {
    // setting the default value of readmore as false
    const[readmore, setReadmore] = useState(false);

    // show only 200 words in the descption 
    const description = readmore?info: `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        // set the readmore as false if it is true and vice versa
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less` : 'Read more'}
                    </span>
                </div>
            </div>

            {/* button */}
            <button className="btn-red"  onClick={()=> removeTour(id)}>
                {/* removeTour removes the card of specific id from the page
                but the data is present in App.js file so we will call the function 
                in Card.js but will declare the function in App.js */}
                Not interested
            </button>
        </div>


    );
}
export default Card; 