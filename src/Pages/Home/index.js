import React from 'react'
import Header from '../../Componets/Header'
import Herosection from './Homecomponets'
import ConnectSection from './Homecomponets/SecondComponent'
import ThirdComponent from './Homecomponets/ThirdComponet'

function Home() {
  return (
    <div>
        <Header/>
        <Herosection/>
        <ConnectSection/>
        <ThirdComponent/>
    </div>
  )
}

export default Home