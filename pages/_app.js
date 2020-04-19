import StoreProvider from "../store";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
};
export default MyApp;
