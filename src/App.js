import "./App.css";
import "./Assets/App.scss";

function App() {
  return (
    <div className="container">
      <div className="navbar">header</div>

      <div className="selection">
        <div className="Card Section-body-1"></div>
        <div className="Card Section-body-2"></div>
        <div className="Card Section-body-3"></div>
        <div className="Card Section-body-4"></div>
        <div className="Card Section-body-5"></div>
        <div className="Card Section-body-6"></div>
      </div>

      <div className="body">
        <div className="Body-Anak Body-1"></div>
        <div className="Body-Anak Body-2">
          <div className="Body-2-anak">1</div>
          <div className="Body-2-anak">2</div>
        </div>
        <div className="Body-Anak Body-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>

    </div>
  );
}

export default App;
