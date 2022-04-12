import { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import Head from 'next/head'
import BasicLayout from '../components/theme/layout/BasicLayout';
import ThreeApp from "../threejs/ThreeApp";
import { useThree } from "../hooks/useThree";
import FPSStats from "react-fps-stats";
import DistanceMeter from '../components/distance_meter/DistanceMeter';
import { useUser } from '../app/login';


const IndexPage: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  const canvas = useThree(ThreeApp);

  return (
    <div className={''}>
      <Head>
        <title>StarsLog.io - Your Star Citizen Map Tracker</title>
      </Head>
       
      <DistanceMeter/>
      <div ref={canvas} style={{ minHeight: "calc(100vh - 250px)" }} />
      <div className='fps-meter'>
      <FPSStats top={'auto'}/>  
      </div>
      
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header']),
  },
})

//Have this function is only for demonstration purposes to use another type of layout, another or none at all to customize completely that page. By default all pages will use "BasicLayout"
IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  )
}

export default IndexPage
