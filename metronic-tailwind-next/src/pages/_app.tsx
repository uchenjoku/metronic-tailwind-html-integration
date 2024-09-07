import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import dynamic from "next/dynamic";
import Navbar from "@/components/Nabbar";
import Toolbar from "@/components/Toolbar";

const GlobalInit = dynamic(() => import('../components/GlobalInit'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <div className="flex grow flex-col [[data-sticky-header=on]_&amp;]:pt-[--tw-header-height-default]">
        <div className="wrapper flex grow flex-col">
          <Header />
          <Navbar />
          <Toolbar />
          <main className="grow" id="content" role="content">
          <div className="container-fixed" id="content_container">
          </div>
          <div className="container-fixed">
            <Component {...pageProps} />
          </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
      <GlobalInit />
    </>
}
