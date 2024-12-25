'use client';

import React from 'react'

const ClientCard = () => {
  return (
    <div>
        <button 
        className='bg-green-400 p-4 rounded' 
        onClick={() => alert('Alert message')}>
            alert me</button>
    </div>
  )
}

export default ClientCard