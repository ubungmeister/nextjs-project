import {MongoClient} from "mongodb";
import styles from '../styles/Home.module.css'
import React from "react";
import EventItem from "../components/events/EventItem";
import MainNavigation from "../components/layout/MainNavigation";
import { parseISO, format } from 'date-fns';

import {GetStaticProps} from "next";
import Head from "next/head";
import EventSearch from "../components/events/EventSearch";
export type EventType ={
    id?:string
    image:string
    title:string
    description:string
    address:string
    tags:Array<string>
    date: Date
}
export type EventArrType ={
    events: EventType[]
}

export default function Home({events}:EventArrType) {
  return (
    <div className='bg-gray-100'>
            <Head>
                <title>Event</title>
                <meta
                    name='description'
                    content='Events meetups'
                />
            </Head>
        <EventSearch/>

        <div className='container mx-auto justify-center md: pt-14 rounded-md rounded-lg'>
            <div className='grid md:grid-cols-2 gap-6 w-7/12 ml-60 rounded-lg		'>
                {events.reverse().map((event)=>(
                    <EventItem event={event} key={event.id}/>
                ))}
            </div>
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
                image:el.image,
                date: el.date,  //enable superjson
                tags:el.tags
            })),
        },
        revalidate:1
    };
};
