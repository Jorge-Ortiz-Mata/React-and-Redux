import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import './App.css';
import Items from './components/items/Items';

function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <Modal />
      <Items />
    </main>
  );
}

export default App;
