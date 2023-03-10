import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#cfddcd]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-2xl text-center'>
        <p>Are you tired??</p>
        <p className='my-4'>Suicide is not an option</p>
        <p className='mb-4 text-red-500'>Calm down!</p>
        <a href="/connection">
          <button className='bg-green-400 text-white p-4 rounded-xl shadow-xl text-base'>Speak to someone</button>
        </a>
          <button className='bg-white p-4 rounded-xl shadow-xl text-xl hover:text-5xl hover:flex'>😂</button>
      </div>

      
    </div>
  )
}

export default Home
