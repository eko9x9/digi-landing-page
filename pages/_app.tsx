import "../assets/styles/main.scss";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
                
        </Head>
        <Component {...pageProps} />
    </>
  )
  
}
export default MyApp
