import { BackgroundWaves } from "./components/BackgroundWaves";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SectionAboutNFTS } from "./components/SectionAboutNFTS";
import { SectionArtists } from "./components/SectionArtists";
import { SectionPopularWeek } from "./components/SectionPopularWeek";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <>
      <BackgroundWaves>
        <Header />
        <Main />
      </BackgroundWaves>

      <SectionAboutNFTS />
      <SectionPopularWeek />
      <SectionArtists />

      <Footer />
    </>
  );
}
