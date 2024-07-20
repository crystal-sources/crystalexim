import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
// import ContactUsForm from "./pages/ContactUsForm";
import Intro from "./pages/Intro";
import Quote from "./pages/quote";
import SwiftFlowSection from "./pages/why";
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="App h-screen w-screen">
        <Header />
        <Intro />
        <SwiftFlowSection />
        <Quote />
        {/* <ContactUsForm /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
