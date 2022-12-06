import {EventType} from "../../pages";
import Image from 'next/image'

function EventDetail(props:EventType){
     const  {image,title, address, description, date, tags} = props
    const localDate = new Date(date).toLocaleDateString('en-US')

    return(
        <div className='container mx-auto md:px-2 py-16 w-1/2'>
            <h1 className='my-4 text-center font-normal text-2xl'>{title}</h1>
            <Image src={image} alt='picture' height={650} width={700}/>
            <div className=' my-4 grid md:grid-cols-2 border-y border-gray-200'>
                <span className='my-2 divide-y'><span className='font-semibold'>Address</span>: {address}</span>
                <span className='my-2 divide-y'><span className='font-semibold'>Date</span>: {localDate}</span>
                <div className='inline-flex mb-2'>
                    <span className='mr-2 font-semibold'>Tags:</span>
                    {tags.map((el,index)=>(
                    <p className='bg-blue-300 rounded-md inline-block gap-4 mr-3 mb-2 text-white capitalize italic px-2' key={index}> {el}</p>
                ))}</div>
            </div>

            <p>{description}</p>
        </div>
        )

}
export default EventDetail