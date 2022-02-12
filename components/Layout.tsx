import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Divider, Layout, Space, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import Rocket from './Rocket'
import styles from '../styles/Layout.module.scss'

const { Header, Content, Footer } = Layout

interface LayoutProps {
    siteKey?: string
    site?: string
}

const TUfastLayout: NextPage<LayoutProps> = ({children, site, siteKey}) => {

    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    const linksObj = [
        { text: 'Github', href: 'https://github.com/TUfast-TUD' },
        { text: 'frage@tu-fast.de', href: 'mailto:frage@tu-fast.de' },
        { text: 'matrix', href: 'https://matrix.to/#/#tu-fast:tu-dresden.de' },
        { text: 'Datenschutz', href: '/datenschutz' },
    ]

    const links = linksObj.map((link) => <Link href={link.href} key={link.text}>{link.text}</Link>)

    const languageSelector = (
        <Menu>
            <LanguageSwitcher lang="de">
                <Menu.Item key="de">{t('language.de')}</Menu.Item>
            </LanguageSwitcher>
            <LanguageSwitcher lang="en">
                <Menu.Item key="en">{t('language.en')}</Menu.Item>
            </LanguageSwitcher>
        </Menu>
    );

    return <>
        <Head>
            <title>{site ? `${site} - ` : ''}TUfast - Das Produktivitäts-Tool für TU Dresden Studierende 🚀</title>
            <meta name="description" content="TUfast ist ein Browser-Addon, dass den Alltag von Studierenden an der TU Dresden erleichtert. Es kann unter anderem automaisch Logins vornehmen und Benachrichtigungen für neue E-Mail geben." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout className={styles.layout}>
            <Header className={styles.navbar}>
                <Link href={'/'} passHref>
                    <a className={styles.logo}><Rocket/> TUfast</a>
                </Link>

                <Menu theme='dark' mode="horizontal" defaultSelectedKeys={siteKey ? [siteKey] : []} style={{fontSize: '1rem'}}>
                    <Menu.Item key={'project'}>
                        <Link href={'/#project'}>{t('nav.projectAndVision')}</Link>
                    </Menu.Item>
                    {/* <Menu.Item key={'project'}>
                        <Link href={'/project'} passHref><a>Project and Vision</a></Link>
                    </Menu.Item>
                    <Menu.Item key={'team'}>
                        <Link href={'/team'} passHref><a>Team</a></Link>
                    </Menu.Item>
                    <Menu.Item key={'jobs'}>
                        <Link href={'/jobs'} passHref><a>Jobs</a></Link>
                    </Menu.Item>
                    <Menu.Item key={'blog'}>
                        <Link href={'/blog'} passHref><a>Blog</a></Link>
                    </Menu.Item> */}
                </Menu>

                <Dropdown overlay={languageSelector} trigger={['click']} className={styles.languageSelector}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>{t('language.selector')} <DownOutlined/></a>
                </Dropdown>

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