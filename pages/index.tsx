import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../home-components/components/Navbar' 
import HomeComponents from '../home-components/HomeComponents'

export default function index() {
  return (
    <div className=' w-full h-full'> 
      <HomeComponents />
    </div>
  )
} 
