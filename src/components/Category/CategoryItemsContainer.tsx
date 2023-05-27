import React from "react";
import CategoryItem from "./CategoryItem";
import If from "@/core/If";
import ItemsLoadingIndicator from "../ItemsLoadingIndicator";

type Props = {
  items: {
    items: any;
  };
  loading: boolean;
};

const CategoryItemsContainer = ({ items, loading }: Props) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap">
      {typeof items !== null && !loading ? (
        <>
          {items.items &&
            items.items.map((item: any, index: any) => {
              return <CategoryItem item={item} key={index} />;
            })}
        </>
      ) : (
        <If condition={loading}>
          <ItemsLoadingIndicator />
        </If>
      )}
    </div>
  );
};

export default CategoryItemsContainer;
