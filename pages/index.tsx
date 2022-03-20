import type { NextPage } from 'next'
import Link from 'next/link'
import { browserName } from 'react-device-detect'
import { useTranslation } from 'next-export-i18n'
import { useEffect, useState } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Markdown from '../components/Markdown'

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

  const SupporterLogos = () => <>
    <div className={styles.supporterLogos}>
      {fsr.map((val, i) =>
        <a target="_blank" rel="noreferrer" href={val.url} title={val.name} key={i}>
          <img src={val.logo} alt={val.name}/>
        </a>
      )}
    </div>
    <div className={styles.supporterLogos}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.stifterverband.org/digitalchangemaker-accelerator"
        title="Stifterverband"
        style={{height: 86}}
      >
        <img src="/sv.svg" alt="Stifterverband"/>
      </a>
    </div>
  </>

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div>
          <h1 className={styles.brandH}><img src="favicon.png" className={styles.rocketLogo} alt="TUfast"/>{t('index.mainHeadingTUfast')}</h1>
          <h1>{t('index.mainHeading')}</h1>
          <h2>{t('index.subHeading')}</h2>
          <h2 style={{marginBottom: 0}}>{t('index.installPrompt')} <a href={browser.url} target={'_blank'} rel="noreferrer">{browser.name}</a> <img src={browser.icon} alt="" loading="lazy" className={styles.browserIcon}/></h2>

          <Markdown
            className={styles.availableFor}
            content={t('index.availableFor', {firefox: browserList.firefox.url, chrome: browserList.chrome.url})}
          />
        </div>

        <div>
          <Markdown content={t('index.infoSection')}/>
        </div>

        <Link href="#project" passHref><BsChevronCompactDown className={styles.scrollIndicator}/></Link>
      </div>

      <div id="project">
        {(t('projectAndVision.content') as Array<string>).map((section, i) =>
          <Markdown key={i} content={section} components={{
            // a little hack to insert the SupporterLogos component by replacing <hr/> (*** in markdown)
            hr: SupporterLogos
          }}/>
        )}
      </div>
    </Layout>
  )
}

export default Home
