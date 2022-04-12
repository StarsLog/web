import styles from './Header.module.scss'
import {  BsThreeDotsVertical } from "react-icons/bs";
import { IoPlanetOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";
import { BiHelpCircle } from "react-icons/bi";
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import Button from '../button/Button';
import Sidebar from "react-sidebar";
import dynamic from 'next/dynamic';
import { BsX } from 'react-icons/bs';
import PointsTableData from '../../points/points_table_data/PointsTableData';
import { useEffect, useState } from 'react';
import { useUser } from '../../../app/login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const LoginForm = dynamic(() => import('../../user/loginform/LoginForm'), {ssr: false});

const Header = () => {
    const user = useSelector((state:any) => { return state.session.value; })
    const { t } = useTranslation('header');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    let userSession = useUser()
    
    useEffect(() => {
      userSession = user
    },[user])
   
    const handleCenter = (id) => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent('searchCenterObject',{detail:{id:id}}))
        }
    }

    const sidebarContent = (
        <div className="container sidebar-container p-3 pt-3">
          <div className='h2 close-icon' onClick={() => setSidebarOpen(false)}><BsX/><div className='h3 d-inline-block text-capitalize'>{t('tracker_points')}</div></div>
          <PointsTableData setSidebarOpen={setSidebarOpen}/>
        </div>
    )
    
    

    return (
        <div className={`${styles.headerMargin} headerMargin`}>
            <header className={`${styles.header} header`}>
                <div className="p-0 container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div className="h2 menu-icon">
                                    <BsThreeDotsVertical/>
                                </div>
                            </button>
                            <Link href="/">
                                <a className="navbar-brand px-3 ">
                                    <img src="/images/starslog_logo.png" height="40" alt="logo"/>
                                </a>
                            </Link>
                            <div className="d-flex d-lg-none">
                                <div className="">
                                    <LoginForm/>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto text-center flex-row justify-content-center">
                                    
                                    <li className='nav-item p-1'>
                                        {router.asPath != '/' ? 
                                            <Link href="/">
                                                <a>
                                                    <Button type="primary" title='Go to map' text={<IoPlanetOutline className='fs-4'/>} onclick={() => setSidebarOpen(false)}/>
                                                </a>
                                            </Link>
                                        : 
                                            <Button type="primary" title='Reset View' text={<IoPlanetOutline className='fs-4'/>} onclick={() => handleCenter('-1')}/>
                                        }
                                        
                                        
                                    </li>
                                    <li className="nav-item p-1">
                                        <Button type="primary" title='Open Log' text={<TiClipboard className='fs-4'/>} onclick={() => setSidebarOpen(!sidebarOpen)}/>
                                    </li>
                                    <li className="nav-item p-1">
                                        <Link href="/docs/">
                                            <a>
                                                <Button type="primary" title='Documentation' text={<BiHelpCircle className='fs-4'/>} onclick={() => setSidebarOpen(false)}/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item p-1">
                                        <a target={'_blank'} href='https://github.com/StarsLog/web'>
                                            <Button type="primary" title='Go to GitHub' text={<i className="lab la-github fs-4"></i>} onclick={() => setSidebarOpen(false)}/>
                                        </a>
                                    </li>
                                </ul>
                            </div> 
                            <div className="navbar-nav d-none d-lg-flex ms-2">
                                <div className="">
                                    <LoginForm/>
                                </div>
                            </div> 
                        </div>
                    </nav>
                </div>
            </header>
            <Sidebar
                sidebar={sidebarContent}
                open={sidebarOpen}
                onSetOpen={setSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
                pullRight
                shadow
                sidebarClassName="sidebar"
                rootClassName="root-sidebar"
            ><></></Sidebar>
        </div>
    )
}

export default Header