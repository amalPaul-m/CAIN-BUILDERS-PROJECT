import React, { Suspense }  from 'react'
import './App.css'
import Header from './components/header.jsx';
import Banner from './pages/banner.jsx';
import Intro from './pages/intro.jsx';
import Description from './pages/description.jsx';
import Bee3D from './components/3DObject.jsx';
import ThirdPage from './pages/thirdPage.jsx';
import Contact from './pages/contact.jsx';
import Footer from './pages/footer.jsx';
import { RotatingLines } from 'react-loader-spinner'


function App() {

  const[loader, setLoader] = React.useState(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 4000);
  },[]);

  return (
    <>
      {loader ? ( 
      <div className="loader-container">
      <div className="loader-wrapper">
      <div className="logo-text">Cain Builders</div>
      <div className="gold-line"></div>
    </div>
    </div>
    ): (
      <>
      <Header />
      <Banner />
      <Intro />
      <Description />
      <ThirdPage />
      <Contact />
      <Footer />
      <Suspense fallback={null}>
        <Bee3D />
      </Suspense>

      </>
    )}
    </>
  )
}

export default App
