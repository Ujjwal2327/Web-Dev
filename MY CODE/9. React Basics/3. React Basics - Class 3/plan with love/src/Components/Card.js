import { useState } from "react";

function Card ({id, name, info, image, price, removeTour}){

    const [readMore, setReadMore] = useState(true);
    
    const desc = readMore ? `${info.substring(0,190)}.....` : info;

    function readMoreHandler(){
        setReadMore(!readMore);       
    }



    return (
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details" >
                    <h4 className="tour-price" >₹ {price}</h4>
                    <h4 className="tour-name" >{name}</h4>
                </div>

                <div className="desc">
                    {desc}
                    <span onClick={readMoreHandler} className="readmore"  >
                        {readMore ? `Read More` : `Show Less` }
                    </span>
                </div>
            </div>

            <button onClick={()=>removeTour(id)} className="not-interested-btn">Not Interested</button>

        </div>
    );

}

export default Card;