import AboutUs from "./pages/AboutUs";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <AboutUs />
      </AnimatePresence>
    </div>
  );
}

export default App;
