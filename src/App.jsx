import './App.css'
import {
    AboutUs,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    SpecialMenu
  } from "./container";
  import { Navbar } from "./components";


export function App() {
   return (
           <div>
   <Navbar />
   <Header />
   <AboutUs />
   <SpecialMenu />
   {/* <Gallery /> */}
   <Intro />
   <Footer />
           </div>
           
      
    ) 
}