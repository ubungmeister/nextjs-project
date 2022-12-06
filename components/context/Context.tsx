import { useState, useMemo, createContext, useContext } from "react";
import {EventType} from "../../pages";


// export async function getStaticProps() {
//     const { db } = await connectToDatabase();
//     const statsCollection = await db.collection('events');
//     const events = await statsCollection.find().toArray()
//     return {
//         props: {
//             events: events.map(el=>({
//                 id:el._id.toString(),
//                 title:el.title,
//                 description:el.description,
//                 address:el.address,
//                 image:el.image,
//                 date: el.date,  //enable superjson
//                 tags:el.tags
//             })),
//         },
//     };
// }
//
// const useEventsController = (events:any) => {
//
//     // const[events, setEvents]=useState<any>([])
//     const [filter, setFilter] = useState("");
//
//     const filteredEvents = useMemo(
//         () =>
//             events.filter((p) =>
//                 p.title.toLowerCase().includes(filter.toLowerCase())
//             ),
//         [filter, events]
//     );
//
//     return {
//         filter,
//         setFilter,
//         events: filteredEvents,
//
//     };
// };
//
// const EventsContext = createContext<ReturnType<typeof useEventsController>>({
//     filter: "",
//     setFilter: () => {},
//     events: [],
//     });
//
// export const EventsProvider = ({ events, children }:any) => (
//     <EventsContext.Provider value={useEventsController(events)}>
//         {children}
//     </EventsContext.Provider>
// );
//
// export const useEvents = () => useContext(EventsContext);