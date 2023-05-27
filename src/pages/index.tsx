import React, { useContext } from "react";
import Container from "@/components/Container";
import { Inter } from "next/font/google";
import Styles from "../styles/main.module.css";
import SiteHeader from "@/components/SiteHeader";
import Foods from "../../foods.json";
import CategoryCard from "@/components/Category/CategoryCard";
import ProductsCarusel from "@/components/Products/ProductsCarusel";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FoodsCategory from "../../foodsCategory.json";
import FeaturedComponent from "@/components/FeaturedComponent";
import ContactForm from "@/components/ContactForm";
import JoinUs from "@/components/JoinUs";
import Link from "next/link";
import Head from "next/head";
import Configrations from "../configrations";
import BrowsingHistory from "@/components/BrowsingHistory";
const inter = Inter({ subsets: ["latin"] });

// Home Page

// relative bg-gradient-to-b from-yellow-500 to-white

export default function Home() {
  return (
    <>
      <Head>
        <title title={Configrations.site.name}>{Configrations.site.name}</title>
      </Head>
      <main className={``}>
        <div
          className={`flex flex-col min-h-screen w-full ${Styles.HeroSection}`}
        >
          {/* Site header  */}
          <SiteHeader />
          <Container>
            <div className="flex flex-col items-center justify-center py-24 space-y-8">
              <h1 className="text-7xl font-bold text-white text-center flex flex-col space-y-6">
                <span>GET START</span> <span>YOUR FAVRIOT SHOPING</span>
              </h1>
                <Link
                  href={"/category"}
                  className="px-12 py-5 rounded text-xl text-white bg-yellow-400 font-semibold shadow-xl hover:bg-yellow-500"
                >
                  Shop now
                </Link>
            </div>
            {/* <div className="-translate-y-10">
              <TrendingProducts products={Products} itemTodisplay={8} />
            </div> */}
          </Container>
        </div>
        <Container>
          {/* About section  */}
          <About />
          {/* displaying cards skeleton when data is not completely loaded  */}
          {/* <If condition={!Products}>
            <CardsSkeleton />
          </If> */}
          {/* <div className="flex flex-row items-center justify-center my-8">
            <h1 className="text-5xl font-semibold">Featured Products</h1>
          </div> */}
          {/* products caruosel  */}
          {/* products by category  */}
          {/* <ProductsCarusel products={Products} /> */}
          <BrowsingHistory />
          <CategoryCard
            products={FoodsCategory}
            seeAllLink="/category"
            seeAllText="See All"
            displayHeader={true}
            headerTitle="Popular Categories"
          />
          {/* products list  */}
          {/* <ProductsList products={Products} /> */}
        </Container>
        <FeaturedComponent
          item={Foods[0]}
          showImageFirst={true}
          classNames="bg-gray-100"
        />
        <FeaturedComponent
          item={Foods[13]}
          showImageFirst={false}
          classNames=""
        />
        <Container>
          <ProductsCarusel
            products={Foods}
            displayHeader={true}
            headerTitle="Featured Products"
            seeAllLink="/category"
            seeAllText="See all"
          />
        </Container>
        <ContactForm displayTitle={true} title="Contact Us" />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
