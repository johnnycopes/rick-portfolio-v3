import Layout from "@/components/Layout"
import { sanityFetch } from "@/sanity/lib/live"
import { RESUME_QUERY } from "@/sanity/lib/queries"
import ResumeContent from "./ResumeContent"

const ResumePage = async () => {
  const { data } = await sanityFetch({ query: RESUME_QUERY })

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
    >
      <ResumeContent resumeUrl={data?.resumeUrl ?? ""} />
    </Layout>
  )
}

export default ResumePage
