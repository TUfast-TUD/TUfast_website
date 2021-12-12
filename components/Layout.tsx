import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Divider, Layout, Space, Menu } from 'antd'
import { Rocket } from 'phosphor-react'
import styles from '../styles/Layout.module.scss'

const { Header, Content, Footer } = Layout

interface LayoutProps {
    siteKey?: string
    site?: string
}

const TUfastLayout: NextPage<LayoutProps> = ({children, site, siteKey}) => {
    const linksObj = [
        { text: 'Github', href: 'https://github.com/TUfast-TUD' },
        { text: 'tufast@tu-dresden.de', href: 'mailto:tufast@tu-dresden.de' },
        { text: 'matrix', href: 'https://google.de' },
    ]

    const links = linksObj.map((link) => <Link href={link.href} key={link.text}>{link.text}</Link>)

    return (<>
        <Head>
            <title>{site ? '' : `${site} - `}TUfast - Das Produktivitäts-Tool für TU Dresden Studierende 🚀</title>
            <meta name="description" content="TUfast ist ein Browser-Addon, dass den Alltag von Studierenden an der TU Dresden erleichtert. Es kann unter anderem automaisch Logins vornehmen und Benachrichtigungen für neue E-Mail geben." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout style={{height: '100vh'}}>
            <Header>
                <div id={'logo'} style={{float: 'left'}}><Rocket /> TUfast</div>
                <Menu theme='dark' mode="horizontal" defaultSelectedKeys={siteKey ? [siteKey] : []}>
                    <Link href={'/project'} passHref><Menu.Item key={'project'}>Project and Vision</Menu.Item></Link>
                    <Link href={'/team'} passHref><Menu.Item key={'team'}>Team</Menu.Item></Link>
                    <Link href={'/jobs'} passHref><Menu.Item key={'jobs'}>Jobs</Menu.Item></Link>
                    <Link href={'/blog'} passHref><Menu.Item key={'blog'}>Blog</Menu.Item></Link>
                </Menu>
            </Header>
            <Content className={styles.mainContainer}>
                { children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Space split={<Divider type="vertical" />}>
                    { links }
                </Space>
            </Footer>
        </Layout>
    </>)
}

export default TUfastLayout