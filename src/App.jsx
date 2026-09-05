import { useState } from 'react';
import './sections.css';
import ApplyModal from './components/ApplyModal.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NominationsStrip from './components/NominationsStrip.jsx';
import Steps from './components/Steps.jsx';
import About from './components/About.jsx';

function App() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="page">
      <Header onApply={() => setApplyOpen(true)} />
      <main>
        <Hero onApply={() => setApplyOpen(true)} />
        <NominationsStrip />
        <Steps />
        <About />
      </main>
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
}

export default App;
