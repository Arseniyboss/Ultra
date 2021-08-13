import ThemeContextProvider from "../contexts/ThemeContext";
import GlobalStyle from "../globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
