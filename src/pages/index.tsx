import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section>
          <h1 className='text-h1Mob md:text-h1'>Onboard</h1>
      </section>
    </>
  )
}
