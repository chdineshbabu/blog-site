import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"
import logout from './logout.png'

import '../App.css'


export const Navbar=()=>{

    const [ user ] = useAuthState(auth);
    const signUserOut = async ()=>{
        await signOut(auth);
    }

    return <div className="navbar">
    <Link className="navlink" to='/' >Home</Link>
    {!user ? (
        <Link className="navlink" to="/login" >Login</Link>
    ):(
        <Link className="navlink" to="/createpost" >Createpost</Link>
    )}
    
 

    <div className="user">
    {
        user && (
            <>
        <p className="user_para">{user?.displayName}</p>
        <img className="user_img" src={user?.photoURL} />
        <button className="user_btn" onClick={signUserOut} >Sign Out</button>
            </>
        )
    }

    </div>

    </div>
}