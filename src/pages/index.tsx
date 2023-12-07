import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Online Store</title>
      </Head>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </>
  );
}
