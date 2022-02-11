import type { NextPage } from 'next'
import Link from 'next/link'
import { browserName } from 'react-device-detect'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'

const Home: NextPage = () => {

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

  const fsrIcons = [
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

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div className={styles.section}>
          <h1>Unlimit your studies.</h1>
          <h2>For TU Dresden students (and employees) only.</h2>
          <h2 style={{marginBottom: 0}}>Install now for <Link href={browser.url}>{browser.name}</Link> <img src={browser.icon} alt="" loading="lazy" className={styles.browserIcon}/></h2>
          <p style={{fontSize: 14}}>
            Available for <Link href={browserList.firefox.url}>Firefox</Link> and <Link href={browserList.chrome.url}>Chromium-based browsers</Link>.
          </p>
        </div>

        <div className={styles.section}>
          <h3>By students, for students. Free & Open Source.</h3>
          <p>
            TUfast ist das #1 Produktivitätstool für TU Dresden Studierende.<br/>
            Seit zwei Jahren entwickeln wir in Zusammenarbeit mit euch und den FSRs das perfekte Produkt, um den Studienalltag zu erleichtern.
          </p>
          <p>
            Erfahre auf dieser Seite alles über das Projekt und installiere TUfast für deinen Browser.
          </p>
        </div>

        <BsChevronCompactDown className={styles.scrollIndicator}/>
      </div>

      <div className={styles.section} id="project">
        <h2>Projekt & Vision</h2>

        <h3>Vision</h3>
        <p>TUfast ist das #1 Produktivitätstool für TU Dresden Studierende. Seit zwei Jahren entwickeln wir in Zusammenarbeit mit euch und den FSRs das perfekte Produkt, um den Studienalltag zu erleichtern.</p>
        <p>Unser Ziel ist es, 5000 Nutzer an der TU Dresden zu gewinnen und die Erweiterung für weitere Hochschulen in Sachsen verfügbar zu machen.</p>

        <h3>Funktionen</h3>
        <p>TUfast stellt derzeit folgende Funktionen zur Verfügung: automatisches Anmelden in die Online-Portale der TU Dresden, Schnellzugriffe und Hotkeys auf die Online-Portale, Übersicht über alle OPAL-Kurse und Verbesserungen in OPAL selbst. Mehr kannst du in TUfast entdecken ;)</p>
        <p>Wir (die Entwickler) nutzen das Projekt auch, um uns selbst in Softwareentwicklung und Produktmanagement weiterzuentwickeln.</p>

        <h3>Projektinformationen</h3>
        <p>TUfast wurde 05.2020 veröffentlicht, ist <a href="https://github.com/TUfast-TUD/TUfast_TUD">quelloffen</a> und wird von Studierenden entwickelt. Stand 07.12.2021 hat TUfast ca. 2500 Nutzer auf allen Plattformen. Eine konkrete Roadmap zum erreichen unserer Ziele findest du auf <a href="https://github.com/orgs/TUfast-TUD/projects/1">GitHub</a>.</p>
        <p>
          Unterstützt wird das Projekt durch<br/>
          - Frau Jantos (eLearning-Koordinatorin) / Herr Jantos (SELMA-PM)<br/>
          - die folgenden FSR:
        </p>
        <div className={styles.fsrIcons}>
          {fsrIcons.map((val, i) =>
            <a href={val.url} title={val.name} key={i}>
              <img src={val.logo} alt={val.name}/>
            </a>
          )}
        </div>

        <h3>Ist die Anwendung sicher?</h3>
        <p>ToDo: Überprüfung Informationssicherheit</p>

        <h3>Und Datenschutz?</h3>
        <p>Die Erweiterung speichert personenbezogene Daten ausschließlich lokal auf dem PC. Wenn du die Erweiterung löschst, werden alle Daten gelöscht. Das wird immer so bleiben! Hier findest du die <Link href={'/datenschutz'}>Datenschutzerklärung</Link>.</p>

        <h3>Kontakt</h3>
        <p><a href="mailto:frage@tu-fast.de">frage@tu-fast.de</a></p>
      </div>
    </Layout>
  )
}

export default Home
