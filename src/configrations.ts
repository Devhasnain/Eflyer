const Configrations={
    site:{
        name:"Eflyer",
        url:process.env.NEXT_PUBLIC_FRONTEND_URL
    },
    paths:{
        dashboard:"Dashboard",
        cart:"Cart",
        cart_items:"Cart_Items",
        profile:"Profile",
        orders:"Orders",
        account:"Account",
        settings:"Settings",
        category:"Category",
        product:"Product",
    },
    auth:{
        signin:"Sign In",
        signup:"Sign Up"
    },
    stripe_public_key:process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY??""
};
export default Configrations