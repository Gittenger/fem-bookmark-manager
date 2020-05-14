import React from "react";

import AppContainer from "./components/app-container/app-container.component";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import Features from "./components/features/features.component";
import DownloadLinks from "./components/download-links/download-links.component";
import Faq from "./components/faq/faq.component";
import Subscribe from "./components/subscribe/subscribe.component";
import Footer from "./components/footer/footer.component";
import { OuterContainer } from "./components/app-container/app-container.styles";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <Hero />
        <Features />
        <DownloadLinks />
        <Faq />
      </AppContainer>
      <OuterContainer>
        <Subscribe />
        <Footer />
      </OuterContainer>
    </>
  );
}

export default App;
