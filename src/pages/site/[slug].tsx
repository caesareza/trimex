import React from 'react'
import { getPageDetail } from '@/requests/services/pages'
import Alert from '@/components/General/Atom/Alert'

const SitePage = ({ result }: any) => {
  const { status, data } = result

  if (status !== 200) return <Alert message="404, content tidak ditemukan" />

  return (
    <section id="site">
      <div className="p-5 container mx-auto">
        <h1 className="font-bold text-2xl mb-3">{data.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.data.description }} />
      </div>
    </section>
  )
}

export async function getServerSideProps({ query }: any) {
  const { slug } = query
  // Fetch data from external API
  const res: any = await getPageDetail(slug)
  const { status, data } = res
  const result = { status, data }
  // Pass data to the page via props
  return { props: { result } }
}

export default SitePage
