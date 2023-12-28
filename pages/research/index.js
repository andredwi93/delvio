import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/PageLayout"))
const ResearchPage = dynamic(() => import("@/components/ResearchServices"))

export default function Research() {
  return (
    <Layout title="Research">
      <ResearchPage />
    </Layout>
  )
}