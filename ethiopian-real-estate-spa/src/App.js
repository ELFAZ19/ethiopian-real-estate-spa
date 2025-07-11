 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppProvider } from "./context/AppContext";
import GlobalStyles from "./assets/styles/globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TransitionWrapper from "./components/TransitionWrapper";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="page">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <TransitionWrapper>
                  <Home />
                </TransitionWrapper>
              }
            />
            
            <Route
              path="/about"
              element={
                <TransitionWrapper>
                  <About />
                </TransitionWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <TransitionWrapper>
                  <Contact />
                </TransitionWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppProvider>
        <GlobalStyles />
        <AppContent />
      </AppProvider>
    </Router>
  );
};

export default App;