import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NominationsStrip from './components/NominationsStrip.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <NominationsStrip />
      </main>
    </div>
  );
}

export default App;