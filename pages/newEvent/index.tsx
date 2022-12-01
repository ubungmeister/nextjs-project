import {EventType} from "../index";
import EventForm from "../../components/events/EventForm";
import {useRouter} from "next/router";

function NewEvent() {
    const router = useRouter()

    async function addNewEvent(data: EventType) {

        const response = await fetch('/api/newEvent', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json()
        console.log(responseData)
        await router.push('/')
    }

    return (
        <div>
            <EventForm addNewEvent={addNewEvent}/>
        </div>
    )

}

export default NewEvent