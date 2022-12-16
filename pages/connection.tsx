import Image from 'next/image'
import React from 'react'
import navUrl from '../public/images/navUrl.png'
import mainUrl from '../public/images/mainUrl.png'

const connection = () => {
  return (
    <div className='flex min-h-screen flex-col md:items-center md:justify-center bg-[#cfddcd]'>
        <h1 className='text-red-500 md:text-3xl text-2xl text-center sm:pt-0 pt-4 top-0'>Do you want some one to join you??</h1>
        <div className=' md:px-auto px-4 w-full'>
            <div className='md:flex md:justify-evenly block justify-center items-center w-full'>
                <div>               
                    <h2 className='text-green-500 text-xl'>Copy your call link/url</h2>
                    <Image src={navUrl} alt="" />
                </div>
                <p className='text-red-500 md:text-3xl text-2xl text-center'>OR</p>
                <div>
                    <p className='text-green-500 text-xl'>Copy from top url browser</p>
                    <Image src={mainUrl} alt="" />
                </div>
            </div>

            <div className='text-center pt-2 block'>
                <div>
                    <p className='text-red-500 text-xl'>Paste Url here</p>
                    <input type="url" name="" id="" className='border border-green-400 md:p-4 p-2 md:px-12 px-8 outline-none rounded-2xl my-2'/>
                </div>
                <button className='bg-green-400 text-white md:p-4 p-2 rounded-xl shadow-xl text-xl'>wait for someone to join you</button>
            </div>
        </div>

    </div>
  )
}

export default connection