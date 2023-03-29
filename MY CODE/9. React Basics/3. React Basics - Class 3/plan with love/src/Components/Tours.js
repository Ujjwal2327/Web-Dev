// import "./Tours.css"
import Card from "./Card"
function Tours({tours, removeTour}){



    return(
        <div className="container" >
            <h2 className="title">Plan With Ujjwal</h2>
            <div className="cards">
                {
                    tours.map( (tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );


}

export default Tours;