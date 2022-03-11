import Link from 'next/link'
import ReactMarkdown, { Options } from 'react-markdown'

type Props = {
  className?: string
  content: string
  components?: Options['components']
}

const Markdown: React.FC<Props> = ({content, components, className}) => (
  <ReactMarkdown className={className} children={content} components={{
    a: ({href, children}) => href?.startsWith('#') || href?.startsWith('/')
      ? <Link href={href}>{children[0] || ''}</Link>
      : <a href={href} target="_blank" rel="noreferrer">{children[0] || ''}</a>,
    ...components
  }}/>
)

export default Markdown
