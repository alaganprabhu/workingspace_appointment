import React from "react";
import "./App.css";
import Footer from "./page/footer/footer.tsx";
import Header from "./page/header/header.tsx";
import Home from "./page/home/home.tsx";

function App() {
  return (
    <div style={{ background: "#F9FAFF" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
