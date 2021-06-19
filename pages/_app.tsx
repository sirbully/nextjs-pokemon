import Head from 'next/head';
import '@/styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pokemon Next!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
