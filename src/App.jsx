import React from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Banner from "./pages/banner.jsx";
import Intro from "./pages/intro.jsx";
import Description from "./pages/description.jsx";
import Bee3D from "./components/3DObject.jsx";
import ThirdPage from "./pages/thirdPage.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./pages/footer.jsx";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Fires when ALL content (images, fonts, etc.) are loaded
    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => window.removeEventListener("load", () => {});
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader-wrapper">
            <div className="logo-text">Cain Builders</div>
            <div className="gold-line"></div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <Intro />
          <Description />
          <ThirdPage />
          <Contact />
          <Footer />
          <Bee3D />
        </>
      )}
    </>
  );
}

export default App;
