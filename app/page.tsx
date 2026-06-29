import {
  Layout,
  Card,
  GlassTray,
} from '@/components'

import {   ITEMS } from '@/constants'

export default function Home () {

  return (
    <Layout>
      <GlassTray>
        { ITEMS.map((item)=><Card key={item.title} {...item} />) }
      </GlassTray>
    </Layout>
  )
}
