import "./App.css";
import Header from "./components/Header/Header";
import WhatsOnYourMind from "./components/Main/whatsOnYourMind";

function App() {
  return (
    <>
      <Header />
      {/* add location feature (want to select your location) */}
      <WhatsOnYourMind />
    </>
  );
}

export default App;
