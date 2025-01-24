import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import "./Main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Header />
          </div>
          <div className="col-lg-3">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
