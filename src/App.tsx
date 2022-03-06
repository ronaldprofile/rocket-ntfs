import { BackgroundWaves } from "./components/BackgroundWaves";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SectionAboutNFTS } from "./components/SectionAboutNFTS";
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
    </>
  );
}
