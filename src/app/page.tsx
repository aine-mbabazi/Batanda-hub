

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Publications from "./components/Publications";

import Experience from "./components/Experience";
import Services from "./components/Services";
import Hero from "./components/Hero";
import MultimediaGallery from "./components/Multimedia";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Experience/>
      <Services/>
      <Publications/>
     <MultimediaGallery/> 

      <Contact/>
      <Footer/>
    </div>
  );
}
