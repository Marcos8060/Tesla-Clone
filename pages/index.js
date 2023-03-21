import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import Hero3 from '@/components/Hero3'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <TopBar /> */}
        <Navbar />
        <Hero />
        <Hero2 />
        <Hero3 />
      </main>
    </>
  )
}
