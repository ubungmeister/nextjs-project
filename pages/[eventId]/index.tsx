import EventDetail from "../../components/events/EventDetail";
import {GetStaticPaths, GetStaticProps} from 'next'
import {MongoClient} from "mongodb";
import {EventType} from "../index";
import {ObjectId} from 'bson';

export type OneEventType = {
    data: EventType
}


function EventDetails({data}: OneEventType) {
    const {image, title, description, address, date, tags} = data
    return (
        <div>
            <EventDetail
                image={image}
                title={title}
                description={description}
                address={address}
                date={date}
                tags={tags}
            />
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/events?retryWrites=true&w=majority')
    const db = client.db()
    const eventsCollection = db.collection('events')
    const events = await eventsCollection.find({}, {projection: {_id: 1}}).toArray() //fetch only objects id
    await client.close()
    return {
        paths: events.map(el => ({params: {eventId: el._id.toString()}})), //generate array of paths dynamically
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => { // must be async
    const params = context.params?.eventId
    const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/events?retryWrites=true&w=majority')
    const db = client.db()
    const eventsCollection = db.collection('events')
    const selectedEvent = await eventsCollection.findOne({
        // @ts-expect-error
        _id: new ObjectId(params)
    })
    await client.close()

    return {
        props: {
            data: {
                id: selectedEvent?._id.toString(),
                title: selectedEvent?.title,
                image: selectedEvent?.image,
                description: selectedEvent?.description,
                address: selectedEvent?.address,
                date: selectedEvent?.date,
                tags: selectedEvent?.tags

            }
        },
    };
};

export default EventDetails