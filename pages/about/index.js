import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/PageLayout"))
const AboutPage = dynamic(() => import("@/components/About"))

export default function About() {
  return (
    <Layout title="About Service">
      <AboutPage />
    </Layout>
  )
}