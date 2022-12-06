import {EventType} from "../../pages";
import Link from "next/link";
import  Image from 'next/image'
export type OneEventType = {
    event: EventType
}

function EventItem({event}: OneEventType) {
    const {id, title, image, address, tags, date} = event
    const localDate = new Date(date).toLocaleDateString('en-US')

    return (

        <div className='bg-white rounded-lg	transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-100 duration-300'>
            <div>
                <Link href={`/${id}`}>
                    <Image className="images w-full  h-1/2 rounded-t-lg" height={300} width={300} src={image} alt={title}/>
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
                <Link href={`/${id}`}>
                {tags?.map((tag, index) => (

                    <div
                        className='bg-blue-300 rounded-md inline-block gap-4 mr-3 mb-2 text-white capitalize italic px-2'
                        key={index}>{tag}
                    </div>)
                )
                }
                </Link>
            </div>
        </div>

    );
}

export default EventItem;
