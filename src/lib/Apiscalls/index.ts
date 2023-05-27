import Cookies from "js-cookie";
import axios from "axios";

// auto login function hits autosignin api with json webtoken on its headers
export const AutoLogin = async () => {
  try {
    const secret = Cookies.get("secret");
    if (secret) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/autosignin`,
        { headers: { secret: secret } }
      );
      if (response.data) {
        return response.data;
      }
    }
  } catch (error: any) {
    return error.message;
  }
};

type SignUpData = {
  name: string;
  number: number;
  email: string;
  password: string;
};

// signup handler
export const SignUpHandler = async ({
  name,
  number,
  email,
  password,
}: SignUpData) => {
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/signup`,
      {
        name,
        email,
        password,
        number,
      }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

type SignInData = {
  email: string;
  password: string;
};

// sign in handler
export const SignInHandler = async ({ email, password }: SignInData) => {
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/signin`,
      {
        email,
        password,
      }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

type CartItems = {
  items: any;
};

// this function is for updating user cartitems
export const HandleCartItems = async ({ items }: CartItems) => {
  const secret = Cookies.get("secret");
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/update`,
      { items },
      { headers: { secret } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// function for updating profile data
export const HandleUpdateProfile = async (
  name: string,
  email: string,
  number: number
) => {
  const secret = Cookies.get("secret");
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/update`,
      { name, email, number },
      { headers: { secret } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// function for changing account password
export const HandleChangePassword = async (
  password: string,
  currentpassword: string
) => {
  const secret = Cookies.get("secret");
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/password/update`,
      { password, currentpassword },
      { headers: { secret } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// function for fetching user orders
export const Fetchuserorders = async () => {
  const secret = Cookies.get("secret");
  try {
    let response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`,
      { headers: { secret } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// funtion for admin signin
export const AdminSignin = async (email?: string, password?: string) => {
  const accesstoken = Cookies.get("accesstoken");
  let requestbody = {
    email: email ?? "",
    password: password ?? "",
  };
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/signin`,
      { ...requestbody },
      { headers: { accesstoken } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// funtion for creating new user through admin dashboad
type CreateUserProps = {
  email: string;
  password: string;
  number: string;
  role: string;
  name: string;
  userrole: string;
};
export const CreateUser = async ({
  email,
  password,
  number,
  role,
  name,
  userrole,
}: CreateUserProps) => {
  const accesstoken = Cookies.get("accesstoken");
  try {
    if (userrole !== "super_admin") {
      throw { message: "You don't have access to perfom this action" };
    }
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/signup`,
      { name, email, password, role, number },
      { headers: { accesstoken } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// funtion for deleting user through admin dashboad
type DeleteUserProps = {
  _id: string;
  email: string;
  role: string;
  userrole: string;
};
export const DeleteUser = async ({
  _id,
  email,
  role,
  userrole,
}: DeleteUserProps) => {
  const accesstoken = Cookies.get("accesstoken");
  try {
    if (userrole !== "super_admin") {
      throw { message: "You don't have access to perfom this active" };
    }
    if (role === "super_admin") {
      throw { message: "You cannot delete super admin" };
    }

    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/delete`,
      { email, _id, role },
      { headers: { accesstoken } }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};

// funtion for placingorder through admin dashboad
type PlaceOrderProps = {
  _id: string;
  userrole: string;
};
export const PlaceOrderHandler = async ({ _id, userrole }: PlaceOrderProps) => {
  const accesstoken = Cookies.get("accesstoken");
  try {
    if (userrole === "super_admin" || userrole === "editor") {
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/orders/place`,
        { _id: _id },
        { headers: { accesstoken } }
      );
      if (response.data) {
        return response.data;
      }
    } else {
      throw { message: "You don't have access to perfom this active" };
    }
  } catch (error: any) {
    return error;
  }
};
