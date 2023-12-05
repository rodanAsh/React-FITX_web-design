import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';

function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonials />
         <Join />
         <Footer />
    </div>
  );
}

export default App;
