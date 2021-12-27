import React, { Children, Fragment, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/satchurch.module.css'

//COMPONENTS

//OPERATIONS
import MainLayout from './layouts/main'


const Home: NextPage = () => { 
  return(
    <Fragment>
      <MainLayout/>
    </Fragment>
  )
}

export default Home
