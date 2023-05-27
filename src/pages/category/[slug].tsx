import React, { useEffect, useState } from "react";
import CategorySideBar from "@/components/Category/CategorySideBar";
import Container from "@/components/Container";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import FoodsWithCategory from "../../../foodsCategory.json";
import CategoryItemsContainer from "@/components/Category/CategoryItemsContainer";
import Configrations from "@/configrations";

const Category = () => {
  const [Items, setItems] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setLoading(true);
    if (slug) {
      const Items = FoodsWithCategory.find((item: any) => {
        if (
          item.category.toLowerCase() === slug.toLocaleString().toLowerCase()
        ) {
          return item;
        }
      });
      setItems(Items);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [slug]);
  return (
    <div>
      <Head>
        <title title="Category">{Configrations.site.name} | Category | {slug && slug}</title>
      </Head>
      <SiteHeader />
      <Container>
        <CategorySideBar activeLink={slug ?? ""}>
          <CategoryItemsContainer loading={loading} items={Items} />
        </CategorySideBar>
      </Container>
    </div>
  );
};

export default Category;
