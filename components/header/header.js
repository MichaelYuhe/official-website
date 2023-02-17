import Head from "next/head";

export default function Header({ title, description }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.svg"/>
            <meta name="og:title" content={title}/>
            <meta name="description" content={description}/>
            <title>{title}</title>
        </Head>
    );
}