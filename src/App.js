import "./App.css";
import Header from "./components/header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const {pathname} = useLocation()
  const [color, setColor] = useState('');
  useEffect(()=>{
    if(pathname==='/'){
      setColor('text-white')
    }else{
      setColor('text-black')
    }
  },[pathname])
  return (
    <div className="App">
        <Header color={color}></Header>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
