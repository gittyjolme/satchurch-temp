//LIBRARIES
import React, { Children, Fragment } from 'react'
import { Provider } from 'react-redux'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/satchurch.module.css'

//COMPONENTS
import MetaHead from '../components/heads/metaHead'
//import HeadNavigation from '../components/heads/headerNavigation'
//import store from '../../store' 

//INTERFACES
interface Portables{
  onFlicks():any
}
export interface MainSubjects{
  onFlicks:()=>{}
}

export interface Gilliad{
  name:string;
  age:string | number;
}
const onFlicks = (a:any)=>{
  return a
}
//OPERATIONS
const MainLayout:React.FC<MainSubjects>= ({onFlicks}) => { //:React.FC<MainSubjects> //{onFlicks}
  return(
    <Fragment>
        <div className="main_body">
            <MetaHead />
            {onFlicks}
        </div>
    </Fragment>
  )
}

export default MainLayout

