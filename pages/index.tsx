import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../home-components/components/Navbar' 
import HomeComponents from '../home-components/HomeComponents'

export default function index() {
  return (
    <div className=' w-full h-full'>  
      <Head>
        <title>Icoweb Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeComponents />
    </div>
  )
} 
