import Layout from '../components/Layout';
import { UIProvider } from '../components/UIContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
