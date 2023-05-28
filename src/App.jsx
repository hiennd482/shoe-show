import React, { useState } from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Header,
  Navbar,
  Sale,
  Stories,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Cart></Cart>
      <main className="flex flex-col gap-16 relative">
        <Header heroapi={heroapi}></Header>
        <Sale endpoint={popularsales} ifExists></Sale>
        <FlexContent endpoint={highlight} ifExists></FlexContent>

        <Sale endpoint={toprateslaes}></Sale>
        <FlexContent endpoint={sneaker}></FlexContent>
        <Stories story={story}></Stories>
      </main>
      <Footer footerAPI={footerAPI}></Footer>
    </>
  );
}

export default App;
