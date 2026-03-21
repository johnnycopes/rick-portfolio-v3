import Layout from "@/components/Layout"
import { sanityFetch } from "@/sanity/lib/live"
import { MISC_QUERY } from "@/sanity/lib/queries"
import MiscContent from "./MiscContent"

const MiscPage = async () => {
  const { data } = await sanityFetch({ query: MISC_QUERY })

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      <MiscContent
        websites={data?.websites ?? []}
        songs={data?.songs ?? []}
        instagrams={data?.instagrams ?? []}
      />
    </Layout>
  )
}

export default MiscPage
