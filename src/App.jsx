import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
// import ContactUsForm from "./pages/ContactUsForm";
import Intro from "./pages/Intro";
import Quote from "./pages/quote";
import SwiftFlowSection from "./pages/why";

function App() {
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
