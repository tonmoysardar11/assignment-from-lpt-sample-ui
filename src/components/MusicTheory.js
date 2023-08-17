import React from 'react'
import TheroyCard from './TheroyCard'
import {cardData} from '../sampleCardData'

const MusicTheory = () => {
  return (
    <div className='max-h-full text-center md:text-left lg:mr-36'>
    <h1 className='text-3xl text-black mb-6 mx-6'>Music Theory</h1>
    <div className='w-full flex flex-wrap justify-between items-center px-4'>
      {cardData.map((element,index)=>{
        return <TheroyCard key={index} item={element}/>
      })}
    </div>
    </div>
  )
}

export default MusicTheory
