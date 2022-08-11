import React from 'react'

export default function ItemCard(props) {

  return (
    <div className='cursor-pointer flex justify-between py-5'>
        <div className='flex'>
        <div className='px-5'>{props.num}</div>
        <img className='w-8 h-auto' src={props.img} alt=""/>
        <div className='px-5'>{props.n}</div>
        <div className='text-slate-400'>{props.nt}</div>
        </div>
        <div className='text-green-500'>{props.p}%</div>
    </div>
  )
}
