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
        name:'Emily Lee',
        profile: profile,
        class: 'Guitar Techniques',
        time: '1h 45m',
        rating: 4.5,
        price: '$19',
        img:card
    },
    {
        name:'Michael',
        profile: profile,
        class: 'Piano Basics',
        time: 'Learn',
        rating: 4.6,
        price: 'Start',
        img:card
    },
    {
        name:'Sophia',
        profile: profile,
        class: 'Music Theory',
        time: '1h 17m',
        rating: 4.1,
        price: 'Start',
        img:card
    }

]
  return (
    <div className='max-h-full text-center md:text-left lg:mr-36'>
    <h1 className='text-3xl text-black mb-6 mx-6'>Music Theory</h1>
    <div className='w-full flex flex-wrap justify-center lg:justify-between items-center px-4'>
      {cardData.map((element,index)=>{
        return <TheroyCard key={index} item={element}/>
      })}
    </div>
    </div>
  )
}

export default MusicTheory
