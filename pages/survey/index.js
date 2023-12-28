import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/PageLayout"))
const SurveyPage = dynamic(() => import("@/components/SurveyServices"))

export default function Survey() {
  return (
    <Layout title="Survey">
      <SurveyPage />
    </Layout>
  )
}