import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Footer from "../components/BLOG/Footer/Footer"
import Home from "../components/BLOG/Home/Home"
import PageDetailsSEO from "../components/BLOG/hooks/PageDetailsSEO"


export default function Index() {
  const router = useRouter()
  useEffect(() => {
  }, [router.query])
  let a = 0
  const changeParam = () => {
    router.query.page = router?.query.page + 1
    router.push(router)
    router.prefetch(router)
  }
  

  const { title } = PageDetailsSEO();
  return (
    <div data-scroll='[green, ,]'>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='lg:pl-16 sm:pl-3 h-[100vh] bg-base-100'>
        {/* ********************************************** */}
        <div>
          {/* ***************************FOR ADMIN NOTICE *********************** */}

          {/* ************** WITH OUT NOTICE HOME PAGE */}
          <div className=''>
            <Home />
          </div>
          <div className='w-full h-full bg-base-100'>
            <div>

            </div>
            {/* *************FOR MOBILE****************** */}
            {/* <div className='justify-end p-10 hidden md:flex'>
              <Mobile />
            </div> */}
          </div>
          <div className='clear-both '>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





