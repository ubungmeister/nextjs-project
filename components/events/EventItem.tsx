import {EventType} from "../../pages";
import Link from "next/link";

export type OneEventType = {
    event: EventType
}

function MeetupItem({event}: OneEventType) {
    const {id, title, image, address, tags, date} = event
    const localDate = new Date(date).toLocaleDateString('en-US')

    return (

        <div className='bg-white rounded-lg	'>
            <div>
                <Link href={`/${id}`}>
                    <img className="images w-full  h-1/2 rounded-t-lg" src={image} alt={title}/>
                </Link>
            </div>
            <div className="flex  gap-1 mx-2 my-4 gap-4 justify-between ">
                <Link className="text-orange-600 hover:text-orange-800 text-sm" href={`/${id}`}>{localDate}</Link>
                <Link className="text-gray-800 hover:text-gray-600" href={`/${id}`}>
                    <address className=' text-sm'>{address}</address>
                </Link>
            </div>
            <div>
                <Link href={`/${id}`}>
                    <div className="text-xl mx-2 my-4  text-gray-800 hover:text-gray-600">{title}</div>
                </Link>
            </div>
            <div className='my-4 mx-2'>
                {tags?.map((tag, index) => (
                    <span
                        className='bg-blue-300 rounded-md	 inline-block gap-4 mr-3 mb-2 text-white capitalize italic px-2'
                        key={index}>{tag}</span>)
                )
                }
            </div>
        </div>

    );
}

export default MeetupItem;
