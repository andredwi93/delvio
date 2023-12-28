import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/components/PageLayout"));
const HomePage = dynamic(() => import("@/components/Home"));

export default function Home() {
  return (
    <Layout title="Home">
      <HomePage />
    </Layout>
  );
}
