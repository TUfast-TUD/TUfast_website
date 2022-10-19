import { Card, Descriptions, Space } from 'antd'
import { useTranslation } from 'next-export-i18n'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { HiLink } from 'react-icons/hi'
import Layout from '../components/Layout'
import styles from '../styles/Team.module.scss'


type MemberLink = {
    type: 'github' | 'other'
    title: string
    url: string
}

type Member = {
    name: string;
    image?: string;
    role: string;
    studies: string;
    occupancy_in_tufast: string;
    links: MemberLink[]
}

const LinkIcon: React.FC<{icon: MemberLink['type']}> = ({ icon }) => {
    switch (icon) {
        case 'github':
            return <FaGithub size={25} />
        default:
            return <HiLink size={25} />
    }
}

const Team = () => {
    const { t } = useTranslation()

    const padArray = (arr: JSX.Element[]) => Array.from({...arr, length: Math.max(arr.length, 4)}, v => v ?? <div/>)

    const memberToCard = (member: Member) => {
        return <Card
            key={member.name}
            className={styles.card}
            cover={member.image ? <img src={member.image} alt={member.name} className={styles.cardImg} /> : null}
            actions={member.links.map((link, i) => (
                <Link key={i} href={link.url} passHref>
                    <a style={{color: '#000b', }} title={link.title}>
                        <LinkIcon icon={link.type} />
                    </a>
                </Link>
            ))}
        >
            <Card.Meta
                title={<div style={{ fontWeight: 'bold', textAlign: 'center', width: '100%' }}>{member.name}</div>}
                description={<Descriptions
                column={1}
                layout='horizontal'
                bordered>
                    <Descriptions.Item label={t('team.card.role')} style={{padding: '8px 20px'}}>
                        {member.role}
                    </Descriptions.Item>
                    <Descriptions.Item label={t('team.card.studies')} style={{padding: '8px 20px'}}>
                        {member.studies}
                    </Descriptions.Item>
                    <Descriptions.Item label={t('team.card.activity')} style={{padding: '8px 20px'}}>
                        {member.occupancy_in_tufast}
                    </Descriptions.Item>
                </Descriptions>
                }
            />
        </Card>
    }

    return (
        <Layout site="Team" siteKey="team">
            <h2>{t('team.h')}</h2>
            <h3>{t('team.active_devs')}</h3>
            <Space direction='horizontal' align='center' wrap className={styles.members}>
                {padArray(t('team.members.active').map(memberToCard))}
            </Space>
            <h3>{t('team.former_devs')}</h3>
            <Space direction='horizontal' align='center' wrap className={styles.members}>
                {padArray(t('team.members.former').map(memberToCard))}
            </Space>
        </Layout>
    )
}

export default Team