import "../lib/dayjs";
import type { AppProps } from "next/app";

import { AppProvider } from "@/hooks/index";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

import { globalStyles } from "@/styles/globals";
globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className} scrollable-container`}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </QueryClientProvider>
      </SessionProvider>

      <ToastContainer />
    </div>
  );
}
