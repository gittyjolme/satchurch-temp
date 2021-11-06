//LIBRARIES
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
//import styles from '../../../styles/satchurch.module.css'

//COMPONENTS
import {ActiveLink} from './headerbtns'

//INTERFACES
interface ActingRouter{
    href:string;
}

//OPERATIONS
export const HeadNavigation = ()=>{
    return(
    <Fragment>
        <ActiveLink href="/" >
            <h1>Home</h1>
        </ActiveLink>
        <ActiveLink href="/worship" >
            <h1>Worship</h1>
        </ActiveLink>
        <ActiveLink href="/explore" >
            <h1>Explore</h1>
        </ActiveLink>  
        <ActiveLink href="/login" >
            <h1>Login</h1>
        </ActiveLink>    
        <ActiveLink href="/signup" >
            <h1>Signup</h1>
        </ActiveLink>        
    </Fragment>
    )
}

export default HeadNavigation