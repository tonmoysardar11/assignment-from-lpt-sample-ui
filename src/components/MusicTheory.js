import React from 'react'
import TheroyCard from './TheroyCard'
import profile from '../media/profile.webp'
import card from '../media/card.webp'


const MusicTheory = () => {
  const cardData=[
    {
        name:'David',
        profile: profile,
        class: 'Music Theory',
        time: '2h 30m',
        rating: 4.8,
        price: '$25',
        img:card
    },
    {
        name:'David',
        profile: profile,
        class: 'Music Theory',
        time: '2h 30m',
        rating: 4.8,
        price: '$25',
        img:card
    },
    {
        name:'David',
        profile: profile,
        class: 'Music Theory',
        time: '2h 30m',
        rating: 4.8,
        price: '$25',
        img:card
    },
    {
        name:'David',
        profile: profile,
        class: 'Music Theory',
        time: '2h 30m',
        rating: 4.8,
        price: '$25',
        img:card
    }

]
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
