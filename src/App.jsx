import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  SocialLinks,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-20 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <SocialLinks/>
        </div>
        <About />
        <Experience />
        <Works />
      </div>
      <div className="relative ">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
