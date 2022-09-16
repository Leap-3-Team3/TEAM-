import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}

export default App;
