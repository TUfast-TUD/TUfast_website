import { Button, Divider, Drawer, Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/ResponsiveMenu.module.scss";
import { LanguageSwitcher, useTranslation } from "next-export-i18n";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  IconLanguage,
  IconChevronDown,
  IconMenu,
  IconBrandGithub
} from '@tabler/icons-react';
import { useBrowser } from "../components/useBrowser";

export type MenuItem = {
  key: string;
  href: string;
  text: string;
};

export type MenuProps = {
  menuItems: MenuItem[];
  siteKey?: string;
};

const ResponsiveMenu: React.FC<MenuProps> = ({ menuItems, siteKey }) => {
  const { t } = useTranslation();

  const browser = useBrowser();

  const languageSelector = (
    <Menu>
      <LanguageSwitcher class="language" lang="de">
        <Menu.Item key="de">{t("language.de")}</Menu.Item>
      </LanguageSwitcher>
      <LanguageSwitcher class="language" lang="en">
        <Menu.Item key="en">{t("language.en")}</Menu.Item>
      </LanguageSwitcher>
    </Menu>
  );

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Link href="/" passHref>
        <a className={styles.logo}>
          <img src="/tufast_logo.svg" alt="Logo" />
        </a>
      </Link>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={siteKey ? [siteKey] : []}
        style={{ fontSize: "1rem", flex: "auto" }}
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
        trigger={["click"]}
        className={`${styles.languageSelector} ${styles.desktop}`}
      >
        <a
          className={`${styles.languageSelectorInner} ant-dropdown-link`}
          onClick={(e) => e.preventDefault()}
        >
          <IconLanguage /> Sprache <IconChevronDown />
        </a>
      </Dropdown>
      <a
        href='https://github.com/TUfast-TUD/TUfast_TUD'
        target='_blank'
        rel='noreferrer'
        className={`${styles.githubLink} ${styles.desktop}`}
        aria-label='TUfast GitHub Repository'
      >
        <IconBrandGithub />
      </a>
      <a href={browser.url} target={"_blank"} rel="noreferrer">
        <div>
          <span
            className={`${styles.heroButtonText} ${styles.heroButton} ${styles.desktop}`}
          >
            {t("index.installPromptHeader")}{" "}
            <img
              src={browser.icon}
              alt=""
              loading="lazy"
              className={styles.browserIcon}
            />{" "}
            {browser.name} {t("index.installPromptBehindHeader")} &rarr;
          </span>
        </div>
      </a>{" "}
      {/* mobile */}
      <a href={browser.url} target={"_blank"} rel="noreferrer">
        <div>
          <span
            className={`${styles.heroButtonText} ${styles.heroButton} ${styles.mobile}`}
            style={{ marginRight: "1rem" }}
          >
            {t("index.installPromptHeader")}{" "}
            <img
              src={browser.icon}
              alt=""
              loading="lazy"
              className={styles.browserIcon}
            />{" "}
            {browser.name} {t("index.installPromptBehindHeader")} &rarr;
          </span>
        </div>
      </a>{" "}
      <Button
        type="text"
        onClick={() => setVisible(true)}
        icon={<MenuOutlined style={{ fontSize: 24 }} />}
        style={{ margin: "auto 0", color: "black" }}
        className={styles.mobile}
      />
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        className={styles.mobile}
        bodyStyle={{ padding: 0 }}
        contentWrapperStyle={{ maxWidth: "100vw" }}
      >
        <Menu
          defaultSelectedKeys={siteKey ? [siteKey] : []}
          mode="inline"
          selectable={false}
          style={{ fontSize: "1rem" }}
        >
          <Divider />
          {menuItems.map((item) => (
            <Menu.Item key={item.key} onClick={() => setVisible(false)}>
              <Link href={item.href}>{item.text}</Link>
            </Menu.Item>
          ))}
          <Divider />
          <SubMenu icon={<IconLanguage />} title={t("language.selector")}>
            <LanguageSwitcher lang="de">
              <Menu.Item key="de">{t("language.de")}</Menu.Item>
            </LanguageSwitcher>
            <LanguageSwitcher lang="en">
              <Menu.Item key="en">{t("language.en")}</Menu.Item>
            </LanguageSwitcher>
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  );
};

export default ResponsiveMenu;
