import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Qualify from "./Components/Qualify/Qualify";
import Steps from "./Components/Steps/Steps";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Banner></Banner>
      <Steps></Steps>
      <Qualify></Qualify>
      <Footer></Footer>
    </>
  );
}

export default App;
