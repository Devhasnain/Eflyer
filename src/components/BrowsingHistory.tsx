import React, { useEffect, useState } from "react";
import ProductsCarusel from "./Products/ProductsCarusel";
import If from "@/core/If";

const BrowsingHistory = () => {
  const [showhistory, setShowhistory] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let browsing_history = localStorage.getItem("browsing_history");
    if (browsing_history) {
      let parse = JSON.parse(browsing_history ?? "");
      if (parse?.length > 5) {
        setShowhistory(true);
        setItems(parse);
      }
    }
  }, []);
  return (
    <>
      <If condition={showhistory}>
        <div className="pb-12 pt-3">
          <ProductsCarusel
            displayHeader={true}
            headerTitle="Browsing history"
            products={items}
            authPlay={false}
          />
        </div>
      </If>
    </>
  );
};

export default BrowsingHistory;
