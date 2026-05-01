import { notFound } from 'next/navigation'

import DocMd from '@/components/doc-md'
import { loadDoc, listDocSlugs } from '@/lib/docs-loader'

interface PageParams {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const slugs = await listDocSlugs()
  return slugs.map(slug => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params
  const doc = await loadDoc(slug)
  if (!doc) return {}
  return {
    title: `${doc.meta.title} — NextDeploy Docs`,
    description: doc.meta.lede,
  }
}

export default async function DocCatchallPage({ params }: PageParams) {
  const { slug } = await params
  const doc = await loadDoc(slug)
  if (!doc) notFound()
  return <DocMd meta={doc.meta} body={doc.body} />
}
