import "./App.css";
import { Navbar, Header, AboutUs, Menu, Chef, Intro, FindUs, Footer } from "./components";

function App() {
  return (
    <div className="App__wrapper">
      <div className="app__heading">
        <Navbar />
      </div>
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
     <FindUs />
     <Footer />
    </div>
  );
}

export default App;
