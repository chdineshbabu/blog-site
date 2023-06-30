import {getDocs, collection} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useEffect, useState } from 'react'
import { Post } from './post'
import { PostPage } from './post-page'
import './post.css'

export const Main =() =>{
    const [postsList, setPostsList]  = useState(null)
    const postsRef = collection(db, 'posts')
    const getPosts = async() =>{
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }
    useEffect(()=>{
        getPosts();
    }, [])

 return <div className='main'>
 {postsList?.map((post)=> <Post post={post}/>)}
    </div>
}