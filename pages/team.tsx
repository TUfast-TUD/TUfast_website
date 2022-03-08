import { Card, Descriptions, Space } from 'antd'
import { useSelectedLanguage, useTranslation } from 'next-export-i18n'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import Layout from '../components/Layout'
import members_de from '../ressources/other/teammembers_de.json'
import members_en from '../ressources/other/teammembers_de.json'

interface Member {
    name: string;
    image?: string;
    alternative_image?: string;
    role: string;
    github?: string;
    studies: string;
    occupancy_in_tufast: string;
}

const Team = () => {
    const { lang } = useSelectedLanguage()
    const { t } = useTranslation()

    const members = lang === "de" ? members_de : members_en;

    const memberToCard = (member: Member) => {
        return <Card
            key={member.name}
            style={{width: 400}}
            cover={member.image ? <img src={member.image} alt={member.name} width='400' /> : null}
            actions={[
                member.github ? <Link key="github" href={member.github} passHref><FaGithub /></Link> : null
            ]}
        >
            <Card.Meta
                title={member.name}
                description={<Descriptions
                column={1}
                layout='horizontal'
                bordered>
                    <Descriptions.Item label={t('team.card.role')}>
                        {member.role}
                    </Descriptions.Item>
                    <Descriptions.Item label={t('team.card.studies')}>
                        {member.studies}
                    </Descriptions.Item>
                    <Descriptions.Item label={t('team.card.activity')}>
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
            <Space direction='horizontal' align='center' wrap>
                {members.members.map(memberToCard)}
            </Space>
            <h3>{t('team.former_devs')}</h3>
            <Space direction='horizontal' align='center' wrap>
                {members.alumni.map(memberToCard)}
            </Space>
        </Layout>
    )
}

export default Team