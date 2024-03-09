import "./App.css";

import Contact from "./Components/Contact Head/Contact";
import ContactF from "./Components/C/ContactF";



import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
       
        <Contact />
        <ContactF />
      
      </main>
    </div>
  );
}

export default App;