import { Link, useParams } from "react-router-dom"
import { collection,getDocs } from "firebase/firestore";
import { useEffect,useState } from "react";
import { db,auth } from "../../config/firebase";
import back from './back.png'


export const PostPage = ()=>{
    let {id} = useParams();
    const [postsList, setPostsList]  = useState(null)
    const postsRef = collection(db, 'posts')
    const getPosts = async() =>{
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }
    useEffect(()=>{
        getPosts();
    }, [])

 let postData = postsList?.find((post)=>post.title===id)




 return<div>
 <div>
 <Link className='blogItem' to={`/`}>
 <img src={back} />
        </Link>
 </div>
 <h1>{postData?.title}</h1>
 <p>{postData?.description}</p>
 <p>@{postData?.username}</p>
 </div>
}