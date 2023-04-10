import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import Header from "@/components/header/header";
// import App from 'next/app';
import GlobalStyles from "@/components/GlobalStyles/GlobalStyles";
const theme = { colors: { primary: "red" } };

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Header /> */}
                <GlobalStyles/> 
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
