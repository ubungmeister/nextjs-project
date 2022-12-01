import classes from './MeetupItem.module.css';
import {EventArrType, EventType} from "../../pages";
import {useRouter} from "next/router";

export type OneEventType={
    event:EventType
}

function MeetupItem({event}:OneEventType) {
    const{id,title,image,address} =event
    const router = useRouter()
    const onClickEventHandler=()=>{
        router.push(`/${id}`)
    }
    return (
        <li className={classes.item}>
            <div>
                <div className={classes.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={onClickEventHandler}>Show Details</button>
                </div>
            </div>
        </li>
    );
}

export default MeetupItem;
