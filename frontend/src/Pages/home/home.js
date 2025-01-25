import { Header } from "../../Components/Header/Header";
import { Services } from "../../Components/Services/Services";

function HomePage() {
  return (
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
  );
}

export default HomePage;
