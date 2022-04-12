import Head from 'next/head'
import Header from "../header/Header";
import Footer from "../footer/Footer";


const BasicLayout = ({ children }) => {
  return (
    <>
      <Head>
        
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BasicLayout;