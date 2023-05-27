import { GetServerSidePropsContext } from "next";
import { AutoLogin } from "../Apiscalls";

export async function withAppProps(ctx: GetServerSidePropsContext) {
  try {
    const CheckUserAuth = AutoLogin();
    return {
      props: {
        ...CheckUserAuth,
      },
    };
  } catch (error) {
    return;
  }
}
