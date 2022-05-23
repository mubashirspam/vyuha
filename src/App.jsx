import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Events from "./components/events/Events";
// import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Events />
      <About />
      <Contact />
    </>
  );
}

export default App