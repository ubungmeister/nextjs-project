import {EventType} from "../../pages";

function EventDetail(props:EventType){
    return(
        <div>
            <img src={props.image} alt={props.image}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        )

}
export default EventDetail