import {MongoClient} from "mongodb";
import styles from '../styles/Home.module.css'
import React from "react";
import EventItem from "../components/events/EventItem";
import MainNavigation from "../components/layout/MainNavigation";
import {GetStaticProps} from "next";
import Head from "next/head";
export type EventType ={
    id?:string
    image:string
    title:string
    description:string
    address:string
}
export type EventArrType ={
    events: EventType[]
}

export default function Home({events}:EventArrType) {
  return (
    <div className={styles.container}>
            <Head>
                <title>Event</title>
                <meta
                    name='description'
                    content='Events meetups'
                />
            </Head>

        <div>
            {events.map((event)=>(
                <EventItem event={event} key={event.id}/>
            ))}
        </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => { // must be async
    const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/events?retryWrites=true&w=majority')
    const db = client.db()
    const eventsCollection = db.collection('events')
    const events = await eventsCollection.find().toArray()
    await client.close()
    return {
        props: {
            events:events.map(el=>({
                id:el._id.toString(),
                title:el.title,
                description:el.description,
                address:el.address,
                image:el.image
            })),
        },
        revalidate:1
    };
};
