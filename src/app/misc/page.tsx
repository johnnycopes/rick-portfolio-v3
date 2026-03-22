import Layout from "@/components/Layout"
import { sanityFetch } from "@/sanity/lib/live"
import { MISC_QUERY } from "@/sanity/lib/queries"
import MiscContent from "./MiscContent"

const MiscPage = async () => {
  const { data: misc } = await sanityFetch({ query: MISC_QUERY })

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      {misc && <MiscContent
        websites={misc.websites}
        songs={misc.songs}
        instagrams={misc.instagrams}
      />}
    </Layout>
  )
}

export default MiscPage
