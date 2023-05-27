import React from "react";
import FoodswithCategories from "../../../foodsCategory.json";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  activeLink?:string|any
};

const Categories = () => {
  let categories = [];

  for (let i = 0; i < FoodswithCategories.length; i++) {
    categories.push(FoodswithCategories[i].category);
  }

  return categories;
};

const CategorySideBar = ({ children,activeLink }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap py-6 border-t">
        <div className="flex flex-col md:w-3/12">
          <div className="px-3 border-r">
            <h3 className="text-3xl font-semibold">Categories</h3>
            <br />
            <div className="flex flex-col space-y-3 md:w-10/12">
              {/* maping through avaliable categories  */}

              {Categories() &&
                Categories().map((item: string, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={`/category/${item}`}
                      className={`py-3 px-6 rounded hover:bg-gray-100 transition duration ${(activeLink && item.toLowerCase()===activeLink.toLowerCase())? ' font-semibold  bg-gray-100 ':"bg-gray-50"}`}
                    >
                      {item}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-9/12 pl-8">{children}</div>
      </div>
    </>
  );
};

export default CategorySideBar;
