import React from 'react'
import Head from './header/Head'
import Body from './body/Body'
import Footer from './Footer/Footer'
import './Home.css'
function Home() {
  return (
    <>
    <div className='containers'>
    <Head/>
    <Body/>
    <Footer/>
    </div>
    
    </>
  );
}

export default Home