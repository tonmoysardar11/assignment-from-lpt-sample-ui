import React from 'react'
import TheroyCard from './TheroyCard'
import {cardData} from '../sampleCardData'

const MusicTheory = () => {
  return (
    <>
    <h1 className='text-3xl text-black my-4 mx-6'>Music Theory</h1>
    <div className='h-full w-full flex flex-wrap justify-start items-center p-4'>
      {cardData.map((element,index)=>{
        return <TheroyCard key={index} item={element}/>
      })}
    </div>
    </>
  )
}

export default MusicTheory
