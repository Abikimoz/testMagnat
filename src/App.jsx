import './sections.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NominationsStrip from './components/NominationsStrip.jsx';
import Steps from './components/Steps.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <NominationsStrip />
        <Steps />
      </main>
    </div>
  );
}

export default App;