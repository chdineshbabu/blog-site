import { useForm } from "react-hook-form"
import *as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc,collection} from 'firebase/firestore'
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import './form.css'

export const CreateForm = () =>{

    const navigate = useNavigate()

    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title: yup.string().required('You Must Add a Title'),
        description: yup.string().required('You Must Add a Descriptiopn'),

    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })


    const postsRef = collection(db, "posts");
    const onCreatePost = async (data) =>{
       await addDoc(postsRef,{
        ...data,
        username: user?.displayName,
        userId: user?.uid,
       })
       navigate('/')
    }

    return  <form className="form" onSubmit={handleSubmit(onCreatePost)} >
        <input className="form_title" placeholder="Title..." {...register('title')} />
        <p>{errors.title?.message}</p>
        <textarea className="form_dec" placeholder="Description..." {...register('description')} rows="10" cols="50"/>
        <p>{errors.description?.message}</p>
        <input className="form_sub" type="submit" value="Publish" />
        </form>
}