import StoreProvider from "../store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};
export default MyApp;
