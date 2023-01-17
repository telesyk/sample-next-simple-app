import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}) {
  return (
    <div className='page'>
      <Header />
      <main  className='main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout