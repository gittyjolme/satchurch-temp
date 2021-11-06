//LIBRARIES
import React, { Children, Fragment } from 'react'
import { Provider } from 'react-redux'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/satchurch.module.css'

//COMPONENTS
import {MetaHead} from '../components/heads/metaHead'
import {HeadNavigation} from '../components/heads/headerNavigation'
//import store from '../../store'

//INTERFACES
interface MainSubjects{
    onFlicks:()=>{}
}
interface Gilliad{
  name:string;
  age:string | number;
}
//OPERATIONS
export const MainLayout:React.FC<MainSubjects> = ({onFlicks}) => {

  const RobTheBank = (Gots:Gilliad)=>{
    const robbery: string | number = ''
    const lollipop : boolean [] = [false]
    return(
      <Fragment>
        <section>
          <h1>{Gots.name} is {Gots.age}</h1>
        </section>
      </Fragment>
    )
  }
  return(
    <Fragment>
        <div className="main_body">
            <MetaHead />
            {onFlicks()}
        </div>
    </Fragment>
  )
}

