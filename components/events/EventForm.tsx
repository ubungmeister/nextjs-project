import {KeyboardEvent, useState} from 'react';
import {EventType} from "../../pages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import  Image from 'next/image'
export type AddPostObjType = {
    addNewEvent: (data: EventType) => void
}

function NewMeetupForm({addNewEvent}: AddPostObjType) {
    const initialValues = {
        title: '',
        description: '',
        tags: [],
        image: '',
        address: '',
        date: new Date
    }
    const [form, setForm] =useState<EventType>(initialValues)
    const [error, setError] = useState<string>('')
    const [tag, setTag] = useState<string | null>(null)

    const tagsHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (form.tags.length < 5 && tag?.trim()) {
                setForm({...form, tags:[...form.tags, tag]})
                setTag(null)
            }
        }
    }

    const onSubmitHandler = () => {
        if (!form.title.trim()) {
            setError('Title is missing')
        } else if (!form.description.trim()) {
            setError('Description is missing')
        } else if (!form.image.trim().includes('https:')) {
            setError('Valid image link starts with https://')
        } else if(!form.address.trim()) {
            setError('Address is missing')
        }else if(form.tags.length < 3) {
                setError('Type at least 3 tags')
        }else {
            addNewEvent(form)
            setForm(initialValues)
        }
    }

    return (
        <div className="flex flex-col items-center pt-10 ">
            <form className="bg-white shadow-md rounded pl-24 pr-24 pt-5 pb-5 mb-10">
                <p className="text-blue-400 text-xl mb-3  pl-20">Add new Event</p>
                <div className=" mb-4">
                    <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Event
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="..."
                        value={form.title}
                        onChange={(e)=>setForm({...form, title: e.target.value})}
                    />
                    <div className='pb-1 pt-1.5'>
                        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Date
                        </label>
                        <DatePicker className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    closeOnScroll={true}
                                    selected={form.date}
                                    onChange={(e: Date) => setForm({...form, date: e})}
                        />

                    </div>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="..."
                        value={form.address}
                        maxLength={30}
                        onChange={(e)=>setForm({...form, address: e.target.value})}
                    />
                    <label className=" block text-gray-700 text-sm font-bold mt-2 mb-2" htmlFor="username">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" placeholder="..."
                        value={form.description}
                        onChange={(e)=>setForm({...form, description: e.target.value})}
                    />
                    <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Image url
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="..."
                        value={form.image}
                        onChange={(e)=>setForm({...form, image: e.target.value})}
                    />
                    <img className='mt-2' src={form.image} width={320}/>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Tags
                    </label>
                    <input className="shadow appearance-none border rounded w-80 py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder='Type tag + Press Enter'
                           maxLength={15}
                           type='text'
                           value={tag || ''}
                           onChange={(e) => setTag(e.currentTarget.value.toLowerCase())}
                           onKeyDown={(e) => tagsHandler(e)}
                    />
                    <div className='mt-4'>
                        {form.tags.map((tag, index)=>(
                            <span className='bg-blue-100 rounded inline-block gap-4 mr-4 text-gray-500 italic px-2' key={index}>#{tag}</span>
                        ))}
                    </div>

                </div>
                <div onClick={()=>onSubmitHandler()}
                     className='px-10 py-2 w-28 font-bold ml-24 text-white bg-blue-300 rounded-md hover:bg-blue-400 cursor-pointer'>
                     Post</div>
                <p className='pt-4 pb-2 text-gray-500 italic text-center'>{error}</p>
            </form>

        </div>

    )
}
export default NewMeetupForm;
