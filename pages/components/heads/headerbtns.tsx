import React, {useState, Fragment, useContext, HTMLAttributeAnchorTarget} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../../styles/satchurch.module.css'

export interface Pottery{
    name:string;
    suriname:string;
    age:number | string;
}
export interface ActingRouter{
    children:any;
    href:string;
}
export const DoggyHead:React.FC<Pottery> =({name,suriname, age})=>{
    return <Fragment>
        {name}<br/>
        {suriname} <br/>
        {age} <br/>
    </Fragment>
} 

const ActiveLink:React.FC<ActingRouter>=({children, href})=>{
    const router = useRouter()
    const style = {
      marginRight: 10,
      backgroundColor:router.asPath === href ? 'yellow' : 'green',
      color: router.asPath === href ? 'green' : 'black',
      borderWidth:0
    }
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push(href)
    }
  
    return (
        <Fragment>
            <button className={styles.hoverbtn} onClick={handleClick} style={style}>
              {children}
            </button>
      </Fragment>
    )
  }
  
  export default ActiveLink