// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

import { useEffect } from 'react';
import Header from "../components/header/header";

export default function App({Component, pageProps}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <>
            <Header title={'FeatBit'}></Header>
            <Component {...pageProps} />
        </>
    );
}
