import {FormEventHandler, useRef} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './NewMeetupForm.module.css';
import {EventType} from "../../pages";

export type AddPostObjType ={
    addNewEvent:(data:EventType)=>void
}

function NewMeetupForm({addNewEvent}:AddPostObjType) {

    const { register, handleSubmit } = useForm<EventType>();
    const onSubmit:SubmitHandler<EventType> = (data)=>{
        addNewEvent(data)

    }


    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>Tile</div>
        <input {...register("title", { required: true, maxLength: 20 })} />
        <div>Description</div>
        <input {...register("description", { required: true, maxLength: 20 })} />
        <div>Image</div>
        <input {...register("image", { required: true, maxLength: 120 })} />
        <div>Address</div>
        <input {...register("address", { required: true, maxLength: 50 })} />
        <input type="submit" />
    </form>
)
}

export default NewMeetupForm;
