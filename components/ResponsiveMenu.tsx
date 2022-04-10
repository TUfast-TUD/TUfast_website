import { Button, Divider, Drawer, Dropdown, Menu } from 'antd'
import { DownOutlined, MenuOutlined, GlobalOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/ResponsiveMenu.module.scss'
import { LanguageSwitcher, useTranslation } from 'next-export-i18n'
import Rocket from './Rocket'
import SubMenu from 'antd/lib/menu/SubMenu'

export type MenuItem = {
  key: string
  href: string
  text: string
}

export type MenuProps = {
  menuItems: MenuItem[]
  siteKey?: string
}

const ResponsiveMenu: React.FC<MenuProps> = ({ menuItems, siteKey }) => {
  const { t } = useTranslation()

  const languageSelector = (
    <Menu>
      <LanguageSwitcher lang="de">
        <Menu.Item key="de">{t('language.de')}</Menu.Item>
      </LanguageSwitcher>
      <LanguageSwitcher lang="en">
        <Menu.Item key="en">{t('language.en')}</Menu.Item>
      </LanguageSwitcher>
    </Menu>
  )

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Link href="/" passHref>
        <a className={styles.logo}>
          <Rocket style={{ verticalAlign: 'baseline', marginBottom: -3 }} />
          <span> TUfast</span>
        </a>
      </Link>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={siteKey ? [siteKey] : []}
        style={{ fontSize: '1rem', flex: 'auto' }}
        selectable={false}
        className={styles.desktop}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link href={item.href}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>

      <Dropdown
        overlay={languageSelector}
        trigger={['click']}
        className={`${styles.languageSelector} ${styles.desktop}`}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {t('language.selector')} <DownOutlined />
        </a>
      </Dropdown>

      {/* mobile */}
      <Button
        type="text"
        onClick={() => setVisible(true)}
        icon={<MenuOutlined style={{ fontSize: 24 }} />}
        style={{ margin: 'auto 0', color: 'white' }}
        className={styles.mobile}
      />
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        className={styles.mobile}
        bodyStyle={{ padding: 0 }}
        contentWrapperStyle={{ maxWidth: '100vw' }}
      >
        <Menu
          defaultSelectedKeys={siteKey ? [siteKey] : []}
          mode="inline"
          selectable={false}
          style={{ fontSize: '1rem' }}
        >
          <Divider />
          {menuItems.map((item) => (
            <Menu.Item key={item.key} onClick={() => setVisible(false)}>
              <Link href={item.href}>{item.text}</Link>
            </Menu.Item>
          ))}
          <Divider />

          <SubMenu icon={<GlobalOutlined />} title={t('language.selector')}>
            <LanguageSwitcher lang="de">
              <Menu.Item key="de">{t('language.de')}</Menu.Item>
            </LanguageSwitcher>
            <LanguageSwitcher lang="en">
              <Menu.Item key="en">{t('language.en')}</Menu.Item>
            </LanguageSwitcher>
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  );
}

export default ResponsiveMenu
