// components
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

// styles
import 'styles/globals.css';
import 'styles/layout.css';

export default function MyApp({ Component, pageProps }) {
  return( 
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}