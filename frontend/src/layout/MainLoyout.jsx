import React from 'react'
import NavBar from '@/components/NavBar'

const MainLoyout = ({children}) => {
  return (
    <>
    <NavBar />
    {children}

    </>
  )
}

export default MainLoyout
