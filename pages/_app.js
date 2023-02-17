// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss'

import { useEffect } from 'react';
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag"
import { DefaultSeo } from 'next-seo';
import Head from "next/head";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <DefaultSeo
                title="FeatBit, 100% open source feature flags management"
                description="FeatBit is a scalable, high-performance, 100% open source feature flags management platform. FeatBit allows you to do Testing in Production, Progressive Delivery, Entitlement  Management, AB Test, etc. Launchdarkly Alternative."
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.featbit.co/',
                    siteName: 'FeatBit',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            {/* <Header title={'FeatBit, 100% open source feature flags management'}
                description={'Open source, 100% Open Source, FOSS, Feature flags, Testing in Production, Progressive Delivery, Feature Management, AB Test, Launchdarkly, Unleash'}></Header> */}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZY6C6DXDBW"></Script>
            <Script id="google-analytics" strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-ZY6C6DXDBW', {
                                page_path: window.location.pathname
                            });
                        `
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
