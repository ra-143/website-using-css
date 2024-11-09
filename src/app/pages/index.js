import Head from "next/head";
import Navbar from "./components/navbar";
import MainSection from "./components/mainSection";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Rabia Khalid - Portfolio</title>
      </Head>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}
