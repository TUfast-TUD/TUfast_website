import { Space, Card, Tag } from 'antd'
import { useTranslation } from 'next-export-i18n'
import seedrandom from 'seedrandom'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import styles from '../styles/Jobs.module.scss'

const tagToColor = (tag: string) => {
  const colors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold']

  return colors[Math.trunc(seedrandom(tag.toLowerCase())()*colors.length)]
}

const Jobs = () => {

  const { t } = useTranslation();

  type Job = {
    title: string
    tags: string[]
    content: string
  }

  const jobCards = (t('jobs.listings') as Array<Job>).map((job, i) =>
    <Card
      key={i}
      title={<span style={{ fontWeight: 'bold' }}>{job.title}</span>}
      extra={job.tags.map((tag, i) => <Tag key={i} color={tagToColor(tag)}>{tag}</Tag>)}
    >
      <Markdown content={job.content} />
    </Card>
  )

  return (
    <Layout site="Jobs" siteKey="jobs">
      {(t('jobs.content') as Array<any>).map((section, i) =>
        <Markdown key={i} content={section} />
      )}

      <Space direction="vertical" size="middle" className={styles.cardsWrapper}>
        {jobCards}
      </Space>
    </Layout>
  )
}

export default Jobs
