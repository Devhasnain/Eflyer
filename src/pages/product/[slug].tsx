import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/Container";
import ProductsFoods from "../../../foods.json";
import If from "@/core/If";
import Footer from "@/components/Footer";
import { useAppDispatch, useAppSelector } from "@/core/redux/store";
import {
  CheckIfItemExistsInCart,
} from "@/core/redux/reducers/productSlice";
import ProductDetail from "@/components/Products/ProductDetail";
import ProductsCarusel from "@/components/Products/ProductsCarusel";
import Configrations from "@/configrations";

let fakedescription =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ab! Repudiandae repellat provident voluptates neque ut ipsa necessitatibus ratione aliquam harum mollitia cumque reprehenderit accusantium aut animi sequi, expedita facilis quo fuga, velit assumenda consequatur. Rem numquam, eaque quae ex at, molestiae assumenda error dolorem laborum aliquid et! Repudiandae unde voluptatibus quos ipsa tenetur aperiam ipsum rerum eos, impedit, voluptate illo inventore consequatur tempora. Placeat accusamus eaque quaerat omnis facere ullam fugit mollitia molestiae nam, adipisci reprehenderit ad est labore delectus cum dignissimos perspiciatis, modi voluptatibus. A animi voluptates repellat eius reiciendis aliquid eaque nihil saepe et. Expedita, assumenda vitae.";

const Product = () => {
  const [Product, setProduct] = useState<any>();
  const [RelatedProducts, setRelatedProducts] = useState<any>();
  const { cartItems } = useAppSelector((state) => state.ProductState);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id, slug } = router.query;
  const [SelectedImage, setSelectedImage] = useState<string>();
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (id && slug) {
  //     const FindProduct = Products.find((item: any) => {
  //       if (item.title.toLowerCase() === slug.toLocaleString().toLowerCase()) {
  //         return item;
  //       }
  //     });
  //     setProduct(FindProduct);
  //   }
  // }, [id, slug]);

  useEffect(() => {
    if (Product) {
      dispatch(CheckIfItemExistsInCart(Product));
    }
  }, [cartItems, slug]);

  // useEffect(() => {
  //   if (Product && Product?.qty) {
  //     setQtyCounter(Product?.qty);
  //   } else {
  //     setQtyCounter(0);
  //   }
  // }, [cartItems, Product]);

  // console.log(Product?.qty);

  // const handleQtyIncrement = (product: any) => {
  //   setQtyCounter(qtyCounter + 1);
  //   if (isItemExistsInCart) {
  //     console.log(qtyCounter);
  //     dispatch(IncreaseProductQty({ product, qty: qtyCounter }));
  //   }
  // };

  // dotclick project

  // got click project

  useEffect(() => {
    if (id && slug) {
      const FindProduct = ProductsFoods.find((item: any) => {
        if (item.name.toLowerCase() === slug.toLocaleString().toLowerCase()) {
          return item;
        }
      });
      setProduct(FindProduct);
      setLoading(false);
    }
  }, [id, slug]);

  useEffect(() => {
    if (Product) {
      const RelatedProducts = ProductsFoods.filter((item: any) => {
        if (item.category.toLowerCase() === Product?.category.toLowerCase()) {
          return item;
        }
      });
      setRelatedProducts(RelatedProducts);
    }
  }, [Product]);

  return (
    // <>
    //   <Head>
    //     <title title="This is my page"></title>
    //   </Head>
    //   <SiteHeader />
    //   <If condition={Product}>
    //     <div className="flex bg-white pb-8 relative">
    //       <Container>
    //         <div className="flex flex-row flex-wrap">
    //           <div className="flex h-auto flex-col md:w-5/12 items-center justify-center space-y-12">
    //             <div className="flex items-center justify-center md:w-10/12 md:h-64 md:mx-auto p-2">
    //               <If condition={!SelectedImage}>
    //                 <Image
    //                   src={Product?.thumbnail}
    //                   width={100}
    //                   height={100}
    //                   alt=""
    //                   className="w-full h-full"
    //                 />
    //               </If>
    //               <If condition={SelectedImage}>
    //                 <Image
    //                   src={SelectedImage ?? ""}
    //                   width={100}
    //                   height={100}
    //                   alt=""
    //                   className="w-full h-full"
    //                 />
    //               </If>
    //             </div>
    //             <div className="flex flex-row space-x-2 py-2 px-4 shadow-lg bg-gray-100">
    //               {Product?.images?.map((item: any, index: number) => {
    //                 return (
    //                   <div
    //                     key={index}
    //                     className="w-full h-20 rounded-md overflow-hidden flex items-center justify-center"
    //                     onClick={() => {
    //                       setSelectedImage(item);
    //                     }}
    //                   >
    //                     <Image
    //                       src={item}
    //                       width={100}
    //                       height={100}
    //                       alt=""
    //                       className="w-full h-full"
    //                     />
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //           <div className="flex flex-col md:w-5/12 px-6 pt-3">
    //             <div className="space-y-2">
    //               <h1 className="text-2xl font-semibold">
    //                 {Product?.title.length > 30 ? (
    //                   Product?.title
    //                 ) : (
    //                   <>
    //                     {Product?.title} {fakedescription.slice(0, 80)}
    //                   </>
    //                 )}
    //               </h1>
    //               <Link href={""} className="text-sm text-blue-500">
    //                 Visit Suppliers Profile and Products
    //               </Link>
    //               <div>Reviews</div>
    //               <Divider />
    //               <div className="text-xl">
    //                 <span className="font-semibold">Price/</span>
    //                 <span className="text-red-600">{Product?.price}$</span>
    //               </div>
    //               <p>
    //                 {Product?.description.length > 300 ? (
    //                   Product?.description
    //                 ) : (
    //                   <>
    //                     {Product?.description} {fakedescription}
    //                   </>
    //                 )}
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex flex-col md:w-2/12 pt-12">
    //             <div className="border p-5 rounded-xl space-y-3">
    //               <div className="">
    //                 <span className="text-sm">$</span>
    //                 <span className="text-xl font-semibold text-red-600">
    //                   {Product?.price}
    //                 </span>
    //               </div>
    //               <p className="text-sm">
    //                 Quia totam doloribus deleniti minus esse error vel cumque,
    //                 dolorem necessitatibus labore?
    //               </p>
    //               <Divider />
    //               <div className="flex items-center justify-between">
    //                 <span>Qty</span>
    //                 <div className="flex space-x-3">
    //                   <button className="bg-gray-200 px-2 font-bold">-</button>
    //                   <span>{qtyCounter}</span>
    //                   <button
    //                     className="bg-gray-200 px-2 font-bold"
    //                     onClick={() => {
    //                       handleQtyIncrement(Product);
    //                     }}
    //                   >
    //                     +
    //                   </button>
    //                 </div>
    //               </div>
    //               <div className="flex justify-between items-center">
    //                 <span>Price</span>
    //                 <span>{Product?.price}</span>
    //               </div>
    //               <Divider />
    //               <div className="flex justify-between">
    //                 <span>Total</span>
    //                 <span className="text-red-500">
    //                   {Product?.price * qtyCounter} $
    //                 </span>
    //               </div>
    //               <Divider />
    //               <If condition={Product && isItemExistsInCart}>
    //                 <button
    //                   onClick={() => {
    //                     dispatch(RemoveItemFromCart(Product));
    //                   }}
    //                   className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration"
    //                 >
    //                   Remove item from Cart
    //                 </button>
    //               </If>
    //               <If condition={Product && !isItemExistsInCart}>
    //                 <button
    //                   onClick={() => {
    //                     dispatch(
    //                       AddItemsToCart({ ...Product, qty: qtyCounter })
    //                     );
    //                   }}
    //                   className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration"
    //                 >
    //                   Add to Cart
    //                 </button>
    //               </If>
    //               <button className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-500 hover:bg-yellow-400 transition duration">
    //                 Buy now
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <br />
    //         <Divider />
    //         <div className="space-y-4 pt-4">
    //           <h3 className="text-2xl font-semibold">Product Information</h3>
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //             Obcaecati necessitatibus rerum eius quaerat sapiente, provident
    //             vel possimus incidunt sunt tempore dignissimos voluptates est
    //             temporibus sit nobis ut aliquam! Distinctio qui quis commodi
    //             quod amet magnam iusto accusamus repellat, animi doloremque quo
    //             atque tempora voluptatibus quaerat odio facilis voluptas?
    //             Doloremque, eius nulla porro natus laborum hic amet dolor sint
    //             voluptates? Dolorum in molestiae, deleniti consequuntur fugit
    //             sit esse ipsa unde quaerat, numquam, amet incidunt
    //             reprehenderit? Laboriosam repellendus molestias dolore dolorem
    //             voluptas.
    //           </p>
    //         </div>
    //       </Container>
    //     </div>
    //   </If>

    //   <Footer />
    // </>

    <>
      <Head>
        <title title="">{Configrations.site.name} | Product | {slug && slug}</title>
      </Head>
      <SiteHeader classNames="border-b" />
      <If condition={Product}>
        <div className="flex bg-white pb-8 relative">
          <Container>
            <ProductDetail
              name={Product?.name}
              image={Product?.image}
              description={Product?.description}
              price={Product?.price}
              Product={Product}
            />
            <If condition={RelatedProducts && RelatedProducts?.length > 4}>
              <ProductsCarusel
                products={RelatedProducts}
                displayHeader={true}
                headerTitle="Related Products"
                seeAllLink={`/category/${Product?.category}`}
                seeAllText="See all"
              />
            </If>
              <ProductsCarusel
                products={ProductsFoods}
                displayHeader={true}
                authPlay={false}
                headerTitle="Popular Products"
                seeAllLink="/category"
                seeAllText="See all"
              />
          </Container>
        </div>
      </If>
      <Footer />
    </>
  );
};

export default Product;
