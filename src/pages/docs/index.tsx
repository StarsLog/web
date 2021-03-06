import { NextPageWithLayout } from '../_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import Head from 'next/head'
import BasicLayout from '../../components/theme/layout/BasicLayout';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const IndexPage: NextPageWithLayout = () => {
    const { t } = useTranslation('common');

    
    return (
      <div className={''}>
        <Head>
          <title>Documentation</title>
        </Head>
        <div className='container'>
            <h1 className='tertiary'>Documentation</h1>
            <h2 className='tertiary'>Sync SC location</h2>
            <h4>Methods</h4>
            <ul>
              <li>You can create your own tool to extract from your notepad the location when you write on the ingame chat "/showlocation" and attack to Stars Log API</li>
              <li>With AutoHotKey and using the provided scripts (that you can modify or create new ones) that automatically keep all in sync</li>
            </ul>
            <h4>AutoHotKey</h4>
            <h6>Script</h6>
              <p><a href="https://gist.github.com/danidomen/f7f484cda766191bdf1a01b052f27412" target={'_blank'}>https://gist.github.com/danidomen/f7f484cda766191bdf1a01b052f27412</a></p>
            <h6>How it works</h6>
            <ul>
              <li>Install AutoHotKey if you don't have it <a href="https://www.autohotkey.com/" target={'_blank'}>https://www.autohotkey.com/</a></li>
              <li>Once you download the scripts from Gist, you need to edit StarsLog.ahk and put your Api Token on the script. Once good, you can execute it</li>
              <li>Start Star Citizen, and when you are ingame, you can click "SHIFT+M" to start the script and send automatically the chat command "/showlocation". This executes each 30 sec, once you click again SHIFT+M or stop the AHK Script</li>
              <li>You can modify the script like the time, or the keys that execute the program</li>
            </ul>
            <h2 className='tertiary'>API</h2>
            <h4>Endpoint</h4>
            <p>URL - {publicRuntimeConfig.API_ENDPOINT}</p>
            <p>All bodies need to be passed as JSON</p>
            <h4>Authentication</h4>
            <p>All methods require the JWT as a request header Authorization: Bearer &#123;JWT TOKEN&#124;, but the method to create a tracker point can accept also a request header X-API-TOKEN with your API Token</p>
            <h4>Methods</h4>

            <h5><span className="badge bg-primary">POST <i className="las la-unlock"></i></span>  /login</h5>
            <p>Login or Register (if email not exists) a user with the provided credentials. Returns a JWT token that includes an API Token</p>
            <h6>Body Request</h6>
            <ul>
              <li>email</li>
              <li>password</li>
            </ul>

            <h5><span className="badge bg-secondary">GET <i className="las la-lock"></i></span>  /me</h5>
            <p>Returns your profile actual data like pinned, only_distance, x, y, z, last_position</p>

            <h5><span className="badge bg-primary">POST <i className="las la-lock"></i></span>  /me/update</h5>
            <p>Update your profile actual values</p>
            <h6>Body Request</h6>
            <ul>
              <li>pinned (id_tracker that you target it)</li>
              <li>only_distance (0 or 1)</li>
            </ul>

            <h5><span className="badge bg-secondary">GET <i className="las la-unlock"></i> / <i className="las la-lock"></i></span>  /tracker</h5>
            <p>Returns a list of public tracker points and if authorized jwt present your tracker points also. The coordinates are transformed to be printed on the StarsLog.io map</p>

            <h5><span className="badge bg-primary">POST <i className="las la-lock"></i></span>  /tracker</h5>
            <p>Create one tracker point</p>
            <h6>Body Request</h6>
            <ul>
              <li>x</li>
              <li>y</li>
              <li>z</li>
            </ul>

            <h5><span className="badge bg-secondary">GET <i className="las la-lock"></i></span>  /tracker/distance</h5>
            <p>The Distance Meter. Return your current position, target tracker point if pinned and distance to target in meters. The coordinates are exactly the ones from Star Citizen system</p>

            <h5><span className="badge bg-secondary">GET <i className="las la-lock"></i></span>  /tracker/position</h5>
            <p>Returns your current position with coordinates transformed to be printed as a tracker point on the StarsLog.io map</p>

            <h5><span className="badge bg-primary">POST <i className="las la-lock"></i></span>  /tracker/&#123;id_tracker&#125;</h5>
            <p>Update one of your tracker points</p>
            <h6>Body Request (each field is optional)</h6>
            <ul>
              <li>name</li>
              <li>category (from 0 to 10)</li>
              <li>public (0 or 1)</li>
            </ul>

            <h5><span className="badge bg-danger">DELETE <i className="las la-lock"></i></span>  /tracker/&#123;id_tracker&#125;</h5>
            <p>Delete one of your tracker points</p>
            
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