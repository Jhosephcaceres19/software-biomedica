import React from 'react'
import Navbar from '../NavBar'
import Sidebar from './Sidebar'
import Plantillas from './components/Plantillas'

export default function page() {
  return (
    <div className='bg-gradient-to-l from-indigo-500 to-indigo-950 max-h-screen h-screen'>
        <Navbar/>
        <div className='flex fles-row'>
          <Sidebar/>
          <Plantillas/>
        </div>
    </div>
  )
}
