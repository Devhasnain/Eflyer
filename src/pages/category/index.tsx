import React, { useState, useEffect } from "react";
import CategorySideBar from "@/components/Category/CategorySideBar";
import Container from "@/components/Container";
import Foods from "../../../foods.json";
import CategoryItem from "@/components/Category/CategoryItem";
import ItemsLoadingIndicator from "@/components/ItemsLoadingIndicator";
import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import Configrations from "@/configrations";

const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>{Configrations.site.name} | Categories</title>
      </Head>
      <SiteHeader/>
      <Container>
        <CategorySideBar>
          <div className="flex flex-col md:flex-row flex-wrap">
            {!loading ? (
              <>
                {Foods.map((item: any, index: number) => {
                  return <CategoryItem item={item} key={index} />;
                })}
              </>
            ) : (
              <ItemsLoadingIndicator />
            )}
          </div>
        </CategorySideBar>
      </Container>
    </>
  );
};

export default Index;
