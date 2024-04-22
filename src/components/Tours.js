// import "./Tours.css";
import Card from './Card';

function Tours({tours, removeTour}){
    return(
        <div className="container">
            {/* heading */}
            <div className="title">
                <h2>Plan Your Trip</h2>
            </div>
            {/* cards section */}
            <div className="cards">
                {/* <Card></Card>
                <Card></Card>  not a good practice as we have to declare multiple cards
                so use map instead of this*/}
                {
                    tours.map((tour)=>{
                        // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
                        // Error: Each child in a list should have a unique "key" prop
                        // this error occurs when using map on any list, pass a key -> it can be id or anything, if there is no key you can pass {index}
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
                 
            </div>
        </div>
    )
}
export default Tours;