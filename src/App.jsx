import './sections.css';
import ApplyModal from './components/ApplyModal.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NominationsStrip from './components/NominationsStrip.jsx';
import Steps from './components/Steps.jsx';
import About from './components/About.jsx';
import { useApplyModal } from './hooks/useApplyModal.js';

function App() {
  const { isOpen, open, close } = useApplyModal();

  return (
    <div className="page">
      <Header onApply={open} />
      <main>
        <Hero onApply={open} />
        <NominationsStrip />
        <Steps />
        <About />
      </main>
      <ApplyModal open={isOpen} onClose={close} />
    </div>
  );
}

export default App;
