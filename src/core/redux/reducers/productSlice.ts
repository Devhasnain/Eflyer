import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  // cartItems: {
  //   title: string;
  //   description: string;
  //   id: string | number;
  //   thumbnail: string;
  //   images: string[];
  //   qty?: number;
  //   price:number
  // }[];

  // dotClickProject
  cartItems: {
    name: string;
    description: string;
    id: string | number;
    image: string;
    qty?: number;
    price: number;
  }[];
  userorders: [],
  isItemExistsInCart: boolean;
  alert: {
    msg: string;
    status: "success" | "error" | null;
    display: boolean;
  };
}

const initialState: ProductState = {
  cartItems: [],
  userorders: [],
  isItemExistsInCart: false,
  alert: {
    msg: "",
    status: null,
    display: false,
  },
};

const ProductState = createSlice({
  name: "ProductState",
  initialState,
  reducers: {
    AddItemsToCart(state, action) {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart_items", JSON.stringify(state.cartItems));
    },
    // RemoveItemFromCart(state, action) {
    //   const items = state.cartItems.filter((product: any) => {
    //     if (
    //       product.title.toLowerCase() !== action.payload.title.toLowerCase()
    //     ) {
    //       return product;
    //     }
    //   });
    //   state.cartItems = items;
    // },
    // CheckIfItemExistsInCart(state, action) {
    //   state.cartItems.forEach((element) => {
    //     if (element.id === action.payload.id) {
    //       state.isItemExistsInCart = true;
    //     } else {
    //       state.isItemExistsInCart = false;
    //     }
    //   });
    // },
    IncreaseProductQty(state, action) {
      //  const filteredItems=state.cartItems.filter((item)=>{
      //   if(item.id!==action.payload.id){
      //     return item
      //   }
      //  });
      //  state.cartItems=filteredItems;
      //  state.cartItems.push(action.payload);
      console.log(action.payload);
    },

    // dot Click Project
    CheckIfItemExistsInCart(state, action) {
      state.cartItems.forEach((element) => {
        if (element.name.toLowerCase === action.payload.name.toLowerCase()) {
          state.isItemExistsInCart = true;
        } else {
          state.isItemExistsInCart = false;
        }
      });
    },
    RemoveItemFromCart(state, action) {
      if (typeof action.payload !== "string") {
        const items = state.cartItems.filter((product: any) => {
          if (
            product.name.toLowerCase() !== action.payload.name.toLowerCase()
          ) {
            return product;
          }
        });
        state.cartItems = items;
        localStorage.setItem("cart_items",JSON.stringify(items));
      } else {
        const items = state.cartItems.filter((product: any) => {
          if (product.name.toLowerCase() !== action.payload.toLowerCase()) {
            return product;
          }
        });
        state.cartItems = items;
        localStorage.setItem("cart_items",JSON.stringify(items));
      }
    },
    ResetCart(state) {
      state.cartItems = [];
    },
    GetCartItemsFromLocalStorage(state) {
      let items = localStorage.getItem("cart_items");
      if (items) {
        let parseItems = JSON.parse(items);
        state.cartItems = parseItems;
      }
    },
    SetCartItems(state,action){
      state.cartItems=action.payload
    },
    SetUserOrders(state,action){
      state.userorders=action.payload
    }
  },
});

export const {
  AddItemsToCart,
  RemoveItemFromCart,
  CheckIfItemExistsInCart,
  IncreaseProductQty,
  GetCartItemsFromLocalStorage,
  ResetCart,
  SetCartItems,
  SetUserOrders
} = ProductState.actions;
export default ProductState.reducer;
