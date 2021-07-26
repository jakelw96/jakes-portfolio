import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <ContactForm></ContactForm>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
      </div>
  );
}

export default App;
