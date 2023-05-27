import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/core/redux/store";
import { AuthContextProvider } from "@/core/contextApi/authContext";
import { ToastContainer } from "react-toastify";
import LoginState from "@/components/auth/LoginState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <ToastContainer />
        <LoginState>
          <Component {...pageProps} />
        </LoginState>
      </Provider>
    </AuthContextProvider>
  );
}
