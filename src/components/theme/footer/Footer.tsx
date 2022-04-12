import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={`${styles.footer} footer`}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img className='cm-icon' src='https://support.robertsspaceindustries.com/hc/article_attachments/360022704853/MadeByTheCommunity_White.png'/> Stars Log is a Community Project.
                    </div>
                    <div className='col-12 col-md-6'>
                        All characters, places, events, ships, and ship designs, and other content originating from Star Citizen, Squadron 42, or other content produced or created by its publishers or developers, are the property of Cloud Imperium Rights LLC and Cloud Imperium Rights Limited.
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer