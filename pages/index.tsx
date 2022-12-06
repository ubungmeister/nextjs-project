import React, {useState} from "react";
import {GetStaticProps} from "next";
import {MongoClient} from "mongodb";
import Head from "next/head";
import EventItem from "../components/events/EventItem";
export type EventType ={
    id?:string
    image:string
    title:string
    description:string
    address:string
    tags:Array<string | null>
    date: Date
    WithId?:any
}
export type EventArrType = {
    events: EventType[]
}

export const getStaticProps: GetStaticProps = async () => { // must be async
    const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/events?retryWrites=true&w=majority')
    const db = await client.db()
    const eventsCollection = await db.collection('events')
    const events = await eventsCollection.find().toArray()
    await client.close()

    return {
        props: {
            events: events.map(el=>({
                id:el._id.toString(),
                title:el.title,
                description:el.description,
                address:el.address,
                image:el.image,
                date: el.date,  //enable superjson
                tags:el.tags
            })),
        },
        revalidate:1
    };
};




export default function Home({events}:EventArrType) {


    const [filter, setFilter] = useState<string | null>('')

    const isFilter = Boolean(filter) ?? false
    const filteredEvents = isFilter
        ? events?.filter((el) => el.tags.includes(filter))
        : events

    return (
        <div>
        <Head>
            <title>Event</title>
            <meta
                name='description'
                content='Events meetups'
            />
        </Head>
    <div className='bg-gray-100 min-h-screen'>
        <div className='container mx-auto justify-center md: pt-14 rounded-md rounded-md'>
            <div className='mb-6 w-7/12 ml-60 rounded-lg '>
                <input className='bg-gray-50 py-3 px-2 border-gray-200 outline-0 hover:border-blue-300 outline-blue-300 outline-2  border text-gray-600 text-xl	w-full rounded-2xl'
                       value={filter||''}
                       onChange={(e) => setFilter(e.target.value)}
                       placeholder={'Search by tag'}
                />

            </div>

            <div className='grid md:grid-cols-2 gap-6 w-7/12 ml-60 rounded-lg'>
                {filteredEvents.map((event, index)=>(
                    <EventItem event={event} key={index}  />
                ))}
            </div>
        </div>

    </div>
        </div>
  )
}

