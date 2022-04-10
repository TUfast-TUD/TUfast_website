import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Divider, Layout, Space } from 'antd'
import { useTranslation, useSelectedLanguage } from 'next-export-i18n'
import styles from '../styles/Layout.module.scss'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiMatrix } from 'react-icons/si'
import { useEffect } from 'react'
import ResponsiveMenu, { MenuItem } from './ResponsiveMenu'

const { Header, Content, Footer } = Layout

interface LayoutProps {
    siteKey?: string
    site?: string
}

const TUfastLayout: NextPage<LayoutProps> = ({children, site, siteKey}) => {

    const { t } = useTranslation()

    const { lang } = useSelectedLanguage()

    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const linksObj = [
        { text: 'Github', href: 'https://github.com/TUfast-TUD', icon: FaGithub },
        { text: 'frage@tu-fast.de', href: 'mailto:frage@tu-fast.de', icon: FaEnvelope },
        { text: 'Matrix', href: 'https://matrix.to/#/#tu-fast:tu-dresden.de', icon: SiMatrix },
        { text: 'Datenschutz', href: '/datenschutz', icon: () => <></> },
    ]

    const links = linksObj.map(link => (
        <div className={styles.links} key={link.text}>
            <link.icon/>
            {['#', '/'].includes(link.href.charAt(0)) ? <Link href={link.href}>{link.text}</Link> : <a href={link.href} target={'_blank'} rel="noreferrer">{link.text}</a>}
        </div>
    ))


    const menuItems: MenuItem[] = [
        {
            key: 'project',
            href: '/#project',
            text: t('nav.projectAndVision'),
        },
        // {
        //     key: 'project',
        //     href: '/project',
        //     text: t('nav.projectAndVision')
        // },
        {
            key: 'team',
            href: '/team',
            text: 'Team',
        },
        {
            key: 'jobs',
            href: '/jobs',
            text: 'Jobs',
        },
        // {
        //     key: 'blog',
        //     href: '/blog',
        //     text: 'Blog',
        // },
    ]

    return <>
        <Head>
            <title>{site ? `${site} - ` : ''}TUfast - Das Produktivitäts-Tool für TU Dresden Studierende 🚀</title>
            <meta name="description" content="TUfast ist ein Browser-Addon, dass den Alltag von Studierenden an der TU Dresden erleichtert. Es kann unter anderem automaisch Logins vornehmen und Benachrichtigungen für neue E-Mail geben." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout className={styles.layout}>
            <Header className={styles.navbar}>
                <ResponsiveMenu menuItems={menuItems} siteKey={siteKey} />
            </Header>

            <Content className={styles.mainContainer}>
                { children }
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                <Space split={<Divider type="vertical" />} style={{flexWrap: 'wrap', justifyContent: 'center'}}>
                    { links }
                </Space>
            </Footer>
        </Layout>
    </>
}

export default TUfastLayout