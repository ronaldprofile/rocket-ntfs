import { BackgroundWaves } from "./components/BackgroundWaves";
import { Header } from "./components/Header";
// import { Main } from "./components/Main";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <>
      <BackgroundWaves>
        <Header />
      </BackgroundWaves>
      {/* <Main /> */}
    </>
  );
}
