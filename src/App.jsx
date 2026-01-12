import './index.css';
import Header from './components/Header';
import PropiedadDetalle from './components/PropiedadDetalle';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PropiedadDetalle />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '100px 0 40px', opacity: 0.6 }} className="small-detail">
        CUARTEL INTERIOR DESIGN BY M HAGERMAN &copy; 2026
      </footer>
    </div>
  );
}

export default App;
