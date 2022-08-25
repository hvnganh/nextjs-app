import '../styles/globals.scss';
import '../styles/grid.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import DataContextWrapper from '../Context/DataContext';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);
    return (
        <DataContextWrapper>
            <Component {...pageProps} />
        </DataContextWrapper>
    );
}

export default MyApp;
