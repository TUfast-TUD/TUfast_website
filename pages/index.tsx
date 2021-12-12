import type { NextPage } from 'next'
import Link from 'next/link'
import { browserName } from 'react-device-detect'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const wsLinks: Record<string, string> = {
    firefox: 'https://addons.mozilla.org/de/firefox/addon/tufast/',
    chrome: 'https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk',
    edge: 'https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk'
  }

  let bigLink = <Link href={ wsLinks.chrome }>Chrome</Link>
  if (browserName.toLowerCase() == 'edge' || browserName.toLowerCase() == 'firefox') bigLink = <Link href={ wsLinks[browserName.toLowerCase()] }>{ browserName }</Link>

  return (
    <Layout>
      <div>
        <h1>Unlimit your studies.</h1>
        <h2>For TU Dresden students (and employees) only.</h2>
        <h2>Install now for { bigLink }</h2>
        Available for <Link href={wsLinks.firefox}>Firefox</Link> and <Link href={wsLinks.chrome}>Chrome-based browsers</Link>.
      </div>
    </Layout>
  )
}

export default Home
