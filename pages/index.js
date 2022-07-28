import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Link from 'next/link';
import Home from '../components/Home/Home';
import Notice from '../components/Home/Notice';
import RightSideLg from '../components/Post-NewsFeed/RightSideLg';
import Mobile from '../components/Home/Mobile';
import Footer from '../components/Home/Footer';
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { cat, tag } = router.query;
  useEffect(() => {
    console.log(router.query)
  }, [router.query])
  let a = 0
  const changeParam = () => {
    router.query.page = router?.query.page + 1
    router.push(router)
    router.prefetch(router)
  }
  return (
    <div data-scroll='[green, ,]'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className='lg:ml-16 sm:pl-3 h-[100vh] bg-base-100'>
        {/* ********************************************** */}
        <div>
          <button className='btn' onClick={changeParam}>
            change
          </button>
          {/* ***************************FOR ADMIN NOTICE *********************** */}
          <div className='min-h-[450px] bg-base-100'>
            <Notice />
          </div>

          {/* ************** WITH OUT NOTICE HOME PAGE */}
          <div className='p-2'>
            <Home />
          </div>
          <div className='p-2 w-full h-full bg-base-100'>
            <div>

            </div>
            <div className='flex justify-end p-10'>
              <Mobile />
            </div>
          </div>
          <div className='clear-both'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}