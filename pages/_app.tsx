import Head from 'next/head'
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Pokemon Next!</title>
      <Component {...pageProps} />;
    </Head>
  );
};

export default App;
