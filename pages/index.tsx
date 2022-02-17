import type { NextPage } from 'next'
import Link from 'next/link'
import { browserName } from 'react-device-detect'
import { useTranslation, useLanguageQuery } from 'next-export-i18n'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const { t } = useTranslation();

  const browserList: Record<string, {name: string, url: string, icon: string}> = {
    firefox: {
      name: 'Firefox',
      url: 'https://addons.mozilla.org/de/firefox/addon/tufast/',
      icon: '/browser-icons/firefox.svg'
    },
    chrome: {
      name: 'Chrome',
      url: 'https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk',
      icon: '/browser-icons/chrome.svg'
    },
    edge: {
      name: 'Edge',
      url: 'https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk',
      icon: '/browser-icons/edge.svg'
    },
  }

  const [browser, setBrowser] = useState(browserList.chrome)

  useEffect(() => {
    if (['edge', 'firefox'].includes(browserName.toLowerCase())) setBrowser(browserList[browserName.toLowerCase()])
  }, [])

  const fsr = [
    {
      name: 'FSR Elektrotechnik',
      url: 'https://fsret.de/',
      logo: '/fsr-icons/fsr_et.png'
    },
    {
      name: 'FSR Geowissenschaften',
      url: 'https://tu-dresden.de/bu/umwelt/geo/fsr',
      logo: '/fsr-icons/fsr_geo.png'
    },
    {
      name: 'FSR Mathe',
      url: 'https://myfsr.de/',
      logo: '/fsr-icons/fsr_mathe.png'
    },
    {
      name: 'FSR Medizin',
      url: 'https://www.medforum-dresden.de/',
      logo: '/fsr-icons/fsr_medi.png'
    },
    {
      name: 'FSR Maschinenwesen',
      url: 'https://tu-dresden.de/ing/maschinenwesen/fsr',
      logo: '/fsr-icons/fsr_mw.png'
    },
    {
      name: 'FSR Psychologie',
      url: 'https://tu-dresden.de/mn/psychologie/fsrpsy',
      logo: '/fsr-icons/fsr_psy.png'
    },
    {
      name: 'FSR Wirtschaftswissenschaften',
      url: 'https://fsrwiwi.de/',
      logo: '/fsr-icons/fsr_wiwi.png'
    },

  ]

  const FsrIcons = () =>
    <div className={styles.fsrIcons}>
      {fsr.map((val, i) =>
        <a href={val.url} title={val.name} key={i}>
          <img src={val.logo} alt={val.name}/>
        </a>
      )}
    </div>

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div className={styles.section}>
          <h1 className={styles.brandH}><img src="favicon.png" className={styles.rocketLogo} alt="TUfast"/>{t('index.mainHeadingTUfast')}</h1>
          <h1>{t('index.mainHeading')}</h1>
          <h2>{t('index.subHeading')}</h2>
          <h2 style={{marginBottom: 0}}>{t('index.installPrompt')} <a href={browser.url} target={'_blank'} rel="noreferrer">{browser.name}</a> <img src={browser.icon} alt="" loading="lazy" className={styles.browserIcon}/></h2>

          {/* <ReactMarkdown className={styles.availableFor} children={t('index.availableFor', {firefox: browserList.firefox.url, chrome: browserList.chrome.url})} components={{
            a: ({href, children}) => <Link href={href || ''}>{children[0] || ''}</Link>
          }}/> */}
        </div>

        <div className={styles.section}>
          <ReactMarkdown components={{h1: 'h3'}} children={t('index.infoSection')}/>
        </div>

        <Link href="#project"><BsChevronCompactDown className={styles.scrollIndicator}/></Link>
      </div>

      <div className={styles.section} id="project">
        <h2>{t('projectAndVision.h')}</h2>

        {(t('projectAndVision.sections') as Array<any>).map((section, i) =>
          <ReactMarkdown key={i} children={section} components={{
            h1: 'h3',
            a: ({href, children}) => <Link href={href || ''}>{children[0] || ''}</Link>,
            // a little hack to insert the FsrIcons component by replacing <hr/> (*** in markdown)
            hr: FsrIcons
          }}/>
        )}
      </div>
    </Layout>
  )
}

export default Home
