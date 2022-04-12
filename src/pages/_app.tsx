
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import store from '../app/store'
import BasicLayout from '../components/theme/layout/BasicLayout';
import '../styles/globals.scss'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

function StarsLogApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <BasicLayout>{page}</BasicLayout>)

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=386, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default appWithTranslation(StarsLogApp)
