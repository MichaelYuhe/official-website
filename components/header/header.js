import Head from "next/head";
import Script from 'next/script'

export default function Header({ title }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.svg"/>
            <meta name="og:title" content={title}/>
            <title>{title}</title>
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZY6C6DXDBW"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-ZY6C6DXDBW');
            </script>
        </Head>
    );
}