import Layout from "../components/layout/layout";
import Image from "next/image";
import fullTextLogo from "../public/images/logo-with-fulltext.svg"

export default function GitHub({ }) {

    return (
        <Image className={`w-5 h-auto`} src={fullTextLogo}></Image>
    )
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}